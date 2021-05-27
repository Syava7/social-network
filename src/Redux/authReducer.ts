import { authAPI, securityAPI } from "../api/api"
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type initialStateType = {
  userId: number | null
  login: string | null
  email: string | null
  isFetching: boolean
  isAuth: boolean
  captchaUrl: string | null
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}

type SetAuthUserDataAT = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

type getCaptchaUrlSuccessAT = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {
    captchaUrl: string
  }
}

const initialState: initialStateType = {
  userId: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return { 
        ...state, 
        ...action.payload    
      }
    default:
      return state
    }
}

const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetAuthUserDataAT => ({
  type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})
const getCaptchaUrlSuccessAC = (captchaUrl: string): getCaptchaUrlSuccessAT => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.me()
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data
      dispatch(setAuthUserDataAC(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    } 
    else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
      const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: message}))
    }    
}


export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false))
    }   
}

export default authReducer