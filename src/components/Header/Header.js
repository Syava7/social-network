import React from 'react'
import classes from './Header.module.css'
import Link from '@material-ui/core/Link'
import { NavLink } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.logoWrap}>
        <Link className={classes.logo} href='#'>
          LOGO
        </Link>
      </div>
      <div className={classes.login}>
        { props.isAuth ? props.login :
          <div>
            <ExitToAppIcon />
            <NavLink to={'/login'} className={classes.loginLink}>
              Login
            </NavLink> 
          </div>
        }
      </div>
    </div>
  )
}

export default Header
