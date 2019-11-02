import React from 'react'
import { Redirect } from 'react-router-dom'

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'} />
    return <Component {...props } />
  }
  return RedirectComponent 
}

export default withAuthRedirect
