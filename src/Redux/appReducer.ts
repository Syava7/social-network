import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialStateType = {
  initialized: boolean
}

type initializedSuccessAT = {
  type: typeof INITIALIZED_SUCCESS
}

const initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {

  case INITIALIZED_SUCCESS:
    return {
      ...state,
      initialized: true }

  default:
    return state
  }
}

export const initializedSuccessAC = (): initializedSuccessAT => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(initializedSuccessAC())
  })
}

export default appReducer