import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



const initialState = {
  posts: [
    {id: 1, message: 'Hello guys', likesCount: 12},
    {id: 2, message: 'Nice to meet you', likesCount: 14},
    {id: 3, message: 'Good', likesCount: 2},
    {id: 4, message: 'Good buy', likesCount: 6}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
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
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state
  }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))   
} 

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))    
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos))
    }
} 


export default profileReducer
