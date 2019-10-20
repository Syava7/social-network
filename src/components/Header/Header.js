import React from 'react'
import classes from './Header.module.css'
import Link from '@material-ui/core/Link';

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link className={classes.logo} href='#'>
          LOGO
        </Link>
      </div>
    </div>
  )
}

export default Header
