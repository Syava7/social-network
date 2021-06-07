import React from 'react'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom'
import {AppStateType} from '../../Redux/store';

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean | null
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValueType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

  const onSubmit = ({email, password, rememberMe, captcha}: LoginFormValueType) => {
    props.login(email, password, rememberMe, captcha)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h2>Please enter your login and password</h2>
      <LoginReduxForm onSubmit={onSubmit} 
                      captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
