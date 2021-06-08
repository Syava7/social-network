import { getAuthUserData } from './authReducer'
import {ActionsTypes} from './store';

type ActionType = ActionsTypes<typeof actions>

export type InitialStateType = typeof initialState

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {

  case 'SN/APP/INITIALIZED_SUCCESS':
    return {
      ...state,
      initialized: true }

  default:
    return state
  }
}

export const actions = {
  initializedSuccessAC: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(actions.initializedSuccessAC())
  })
}

export default appReducer