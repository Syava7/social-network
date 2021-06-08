import {ResultCode, ResultCodeForCaptcha} from '../api/api'
import {stopSubmit} from 'redux-form'
import {ActionsTypes, BaseThunkType} from './store';
import {authAPI} from '../api/authAPI';
import {securityAPI} from '../api/securityAPI';


type ActionType = ActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType | ReturnType<typeof stopSubmit>>

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
    case 'SN/AUTH/SET_USER_DATA':
    case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
      return { 
        ...state,
        ...action.payload    
      }
    default:
      return state
    }
}

export const actions = {
  setAuthUserDataAC: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => ({
    type: 'SN/AUTH/SET_USER_DATA', payload: {userId, email, login, isAuth}
  } as const),
  getCaptchaUrlSuccessAC: (captchaUrl: string) => ({
    type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
  } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me()
    if (meData.resultCode === ResultCode.Success) {
      const {id, email, login} = meData.data
      dispatch(actions.setAuthUserDataAC(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
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
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(actions.getCaptchaUrlSuccessAC(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === ResultCode.Success) {
      dispatch(actions.setAuthUserDataAC(null, null, null, false))
    }   
}

export default authReducer