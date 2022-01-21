import React from 'react'
import LoginReduxForm from './LoginForm'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../Redux/authReducer'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../../Redux/store';


export type LoginFormValueType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const LoginPage: React.FC = () => {

  const captchaUrl = useSelector((state: AppStateType ) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType ) => state.auth.isAuth)

  const dispatch = useDispatch()

  const onSubmit = ({email, password, rememberMe, captcha}: LoginFormValueType) => {
    dispatch(login(email, password, rememberMe, captcha))
  }

  if (isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h2>Please enter your login and password</h2>
      <LoginReduxForm onSubmit={onSubmit} 
                      captchaUrl={captchaUrl}/>
    </div>
  )
}


export default LoginPage
