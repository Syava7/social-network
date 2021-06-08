import {PhotosType, PostType, ProfileType} from '../types/types'
import {ActionsTypes, BaseThunkType} from './store';
import {profileAPI} from '../api/profileAPI';

type ActionType = ActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>

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
    case 'SN/PROFILE/ADD_POST':
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}],
        newPostText: ''
      }
    case 'SN/PROFILE/SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'SN/PROFILE/SET_STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      }
    default:
      return state
  }
}

export const actions = {
  addPostAC: (newPostText: string) => ({type: 'SN/PROFILE/ADD_POST', newPostText} as const),
  setUserProfileAC: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
  setStatusAC: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
  savePhotoSuccessAC: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfileAC(data))
} 

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatusAC(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(actions.setStatusAC(status))
    }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccessAC(data.data.photos))
    }
} 


export default profileReducer
