import {UserType} from '../types/types';
import {ActionsTypes, BaseThunkType} from './store';
import {usersAPI} from '../api/usersAPI';


type ActionType = ActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionType>

export type InitialStateType = typeof initialState

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<any>, // array users id
}

const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case 'SN/USERS/UNFOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SN/USERS/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id != action.userId)]
      }
    default:
      return state
  }
}

export const actions = {
  followSuccessAC: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
  unfollowSuccessAC: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
  setUsersAC: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
  setCurrentPageAC: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
  setTotalUsersCountAC: (totalUsersCount: number) => ({
    type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
    totalUsersCount
  } as const),
  toggleIsFetchingAC: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
  toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => ({
    type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  } as const),
}


export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFetchingAC(true))
  dispatch(actions.setCurrentPageAC(currentPage))

  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(actions.toggleIsFetchingAC(false))
  dispatch(actions.setUsersAC(data.items))
  dispatch(actions.setTotalUsersCountAC(data.totalCount))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFollowingProgressAC(true, userId))
  const followData = await usersAPI.follow(userId)
  if (followData.resultCode === 0) {
    dispatch(actions.followSuccessAC(userId))
  }
  dispatch(actions.toggleIsFollowingProgressAC(false, userId))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleIsFollowingProgressAC(true, userId))
  const unfollowData = await usersAPI.unfollow(userId)
  if (unfollowData.resultCode === 0) {
    dispatch(actions.unfollowSuccessAC(userId))
  }
  dispatch(actions.toggleIsFollowingProgressAC(false, userId))
}

export default usersReducer
