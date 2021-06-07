import {usersAPI} from '../api/api'
import {UserType} from '../types/types';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLWING_PROGRESS = 'TOOGLE_IS_FOLLWING_PROGRESS'


type followSuccessAT = {
  type: typeof FOLLOW
  userId: number
}

type unfollowSuccessAT = {
  type: typeof UNFOLLOW
  userId: number
}

type setUsersAT = {
  type: typeof SET_USERS
  users: Array<UserType>
}

type setCurrentPageAT = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

type setTotalUsersCountAT = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

type toogleIsFetchingAT = {
  type: typeof TOOGLE_IS_FETCHING
  isFetching: boolean
}

type toogleIsFollowingProgressAT = {
  type: typeof TOOGLE_IS_FOLLWING_PROGRESS
  isFetching: boolean
  userId: number
}

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
    case TOOGLE_IS_FETCHING:
      return { 
        ...state,
        isFetching: action.isFetching 
      }
    case TOOGLE_IS_FOLLWING_PROGRESS:
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

export const followSuccessAC = (userId: number): followSuccessAT => ({type: FOLLOW, userId})
export const unfollowSuccessAC = (userId: number): unfollowSuccessAT => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): setUsersAT => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountAT  => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toogleIsFetchingAC = (isFetching: boolean): toogleIsFetchingAT => ({type: TOOGLE_IS_FETCHING, isFetching})
export const toogleIsFollowingProgressAC = (isFetching: boolean, userId: number): toogleIsFollowingProgressAT => ({type: TOOGLE_IS_FOLLWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toogleIsFetchingAC(true))
  dispatch(setCurrentPageAC(currentPage))

  const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toogleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
}

export const follow = (userId: number) => async (dispatch: any) => {
  dispatch(toogleIsFollowingProgressAC(true, userId))
  const response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
      dispatch(followSuccessAC(userId))
    }
    dispatch(toogleIsFollowingProgressAC(false, userId))
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  dispatch(toogleIsFollowingProgressAC(true, userId))
  const response = await usersAPI.unfollow(userId)   
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccessAC(userId))
    }
    dispatch(toogleIsFollowingProgressAC(false, userId))
}

export default usersReducer
