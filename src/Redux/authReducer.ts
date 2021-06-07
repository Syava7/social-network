import {ResultCode, ResultCodeForCaptcha} from '../api/api'
import {stopSubmit} from 'redux-form'
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './store';
import {authAPI} from '../api/authAPI';
import {securityAPI} from '../api/securityAPI';

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

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

type ActionType = SetAuthUserDataAT | getCaptchaUrlSuccessAT

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export type InitialStateType = typeof initialState

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isFetching: false as boolean | null,
  isAuth: false as boolean | null,
  captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
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

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me()
    if (meData.resultCode === ResultCode.Success) {
      const {id, email, login} = meData.data
      dispatch(setAuthUserDataAC(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCode.Success) {
      dispatch(getAuthUserData())
    } 
    else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
          dispatch(getCaptchaUrl())
        }
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: message}))
    }    
}


export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === ResultCode.Success) {
      dispatch(setAuthUserDataAC(null, null, null, false))
    }   
}

export default authReducer