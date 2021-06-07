import {PhotosType, PostType, ProfileType} from '../types/types'
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';
import {usersAPI} from '../api/usersAPI';
import {profileAPI} from '../api/profileAPI';

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


type addPostAT = {
  type: typeof ADD_POST
  newPostText: string
}

type setUserProfileAT = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type setStatusAT = {
  type: typeof SET_STATUS
  status: string
}

type savePhotoSuccessAT = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

type ActionType = addPostAT | setUserProfileAT | setStatusAT | savePhotoSuccessAT

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export type InitialStateType = typeof initialState

const initialState = {
  posts: [
    {id: 1, message: 'Hello guys', likesCount: 12},
    {id: 2, message: 'Nice to meet you', likesCount: 14},
    {id: 3, message: 'Good', likesCount: 2},
    {id: 4, message: 'Good buy', likesCount: 6}
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}],
        newPostText: ''
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      }
    default:
      return state
  }
}

export const addPostAC = (newPostText: string): addPostAT => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile: ProfileType): setUserProfileAT => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: string): setStatusAT => ({type: SET_STATUS, status})
export const savePhotoSuccessAC = (photos: PhotosType): savePhotoSuccessAT => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
} 

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status))
    }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccessAC(response.data.data.photos))
    }
} 


export default profileReducer
