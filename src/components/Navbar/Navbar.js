import React from 'react'
import './Navbar.css'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const Navbar = () => {
  return (
    <nav className='nav'>
      <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Music</MenuItem>
          <MenuItem>Setting</MenuItem>
      </MenuList>
    </nav>
  )
}

export default Navbar
