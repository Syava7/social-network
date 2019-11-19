import React from 'react'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom'


const Login = (props) => {

  const onSubmit = ({email, password, rememberMe, captcha}) => {
    props.login(email, password, rememberMe, captcha)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} 
                      captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
