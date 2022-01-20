import React from 'react'
import LoginReduxForm from './LoginForm'
import {connect, useSelector} from 'react-redux'
import {login} from '../../Redux/authReducer'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../../Redux/store';


type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValueType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const Login: React.FC<MapDispatchPropsType> = (props) => {

  const captchaUrl = useSelector((state: AppStateType ) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType ) => state.auth.isAuth)

  const onSubmit = ({email, password, rememberMe, captcha}: LoginFormValueType) => {
    props.login(email, password, rememberMe, captcha)
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


export default connect(null,{ login })(Login)
