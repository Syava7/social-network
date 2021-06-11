import React from 'react'
import { Redirect } from 'react-router-dom'

type PropsType = {
  isAuth: boolean
}

function withAuthRedirect<WCP> (Component: React.ComponentType<WCP>)  {
  const RedirectComponent = (props: PropsType) => {
    let {isAuth, ...restProps} = props

    if(!isAuth) return <Redirect to={'/login'} />
    return <Component {...restProps as WCP} />
  }
  return RedirectComponent
}

export default withAuthRedirect
