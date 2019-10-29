import React from 'react'
import classes from './Navbar.module.css'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <MenuList>
          <NavLink className={classes.link} to='/profile'>
            <MenuItem className={classes.item}> 
              <AccountCircleOutlinedIcon className={classes.icon} />  
              Profile
            </MenuItem>
          </NavLink>
          <NavLink className={classes.link} to='/dialogs'>
            <MenuItem className={classes.item}> 
              <EmailOutlinedIcon className={classes.icon} />  
              Messages
            </MenuItem>
          </NavLink>
          <NavLink className={classes.link} to='/users'>
            <MenuItem className={classes.item}> 
              <PeopleAltOutlinedIcon className={classes.icon} />  
              Users
            </MenuItem>
          </NavLink>
            <MenuItem className={classes.item}>
              <AnnouncementOutlinedIcon className={classes.icon} />
              News
            </MenuItem>
          <MenuItem className={classes.item}>
            <LibraryMusicOutlinedIcon className={classes.icon} />
            Music
          </MenuItem>
          <MenuItem className={classes.item}>
            <SettingsOutlinedIcon className={classes.icon} />
            Setting
          </MenuItem>
      </MenuList>
    </nav>
  )
}

export default Navbar
