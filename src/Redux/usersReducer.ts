import {ThunkAction} from 'redux-thunk';
import {usersAPI} from '../api/api'
import {UserType} from '../types/types';
import {AppStateType} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


type FollowSuccessAT = {
  type: typeof FOLLOW
  userId: number
}

type UnfollowSuccessAT = {
  type: typeof UNFOLLOW
  userId: number
}

type SetUsersAT = {
  type: typeof SET_USERS
  users: Array<UserType>
}

type SetCurrentPageAT = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type SetTotalUsersCountAT = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

type ToggleIsFetchingAT = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

type ToggleIsFollowingProgressAT = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

type ActionType = FollowSuccessAT |
  UnfollowSuccessAT |
  SetUsersAT |
  SetCurrentPageAT |
  SetTotalUsersCountAT |
  ToggleIsFetchingAT |
  ToggleIsFollowingProgressAT

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export type InitialStateType = typeof initialState

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> // array users id
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id !== action.userId)]
      }
    default:
      return state
  }
}

export const followSuccessAC = (userId: number): FollowSuccessAT => ({type: FOLLOW, userId})
export const unfollowSuccessAC = (userId: number): UnfollowSuccessAT => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAT => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingAT => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number): ToggleIsFollowingProgressAT => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})


export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true))
  dispatch(setCurrentPageAC(currentPage))

  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetchingAC(false))
  dispatch(setUsersAC(data.items))
  dispatch(setTotalUsersCountAC(data.totalCount))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFollowingProgressAC(true, userId))
  const response = await usersAPI.follow(userId)
  if (response.data.resultCode === 0) {
    dispatch(followSuccessAC(userId))
  }
  dispatch(toggleIsFollowingProgressAC(false, userId))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFollowingProgressAC(true, userId))
  const response = await usersAPI.unfollow(userId)
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccessAC(userId))
  }
  dispatch(toggleIsFollowingProgressAC(false, userId))
}

export default usersReducer
