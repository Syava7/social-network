import React from 'react'
import './Header.css'
import Link from '@material-ui/core/Link';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link href='#' underline='none' color='secondary'>
          LOGO
        </Link>
      </div>
    </div>
  )
}

export default Header
