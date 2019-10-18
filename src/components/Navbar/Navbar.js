import React from 'react'
import './Navbar.css'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Navbar = () => {
  return (
    <nav className='nav'>
      <MenuList>
          <MenuItem>
            
            Profile
          </MenuItem>
          <MenuItem>
            <MailOutlineIcon />
              Messages
          </MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Music</MenuItem>
          <MenuItem>Setting</MenuItem>
      </MenuList>
    </nav>
  )
}

export default Navbar
