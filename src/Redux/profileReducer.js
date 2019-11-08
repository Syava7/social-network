import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'



const initialState = {
  posts: [
    {id: 1, message: 'Hello guys', likesCount: 12},
    {id: 2, message: 'Nice to meet you', likesCount: 14},
    {id: 3, message: 'Good', likesCount: 2},
    {id: 4, message: 'Good buy', likesCount: 6}
  ],
  newPostText: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
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
    default:
      return state
  }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
} 

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
} 


export default profileReducer