import React from 'react'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom'


const Login = (props) => {

  const onSubmit = ({email, password, rememberMe}) => {
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
