import React from 'react'
import classes from './Navbar.module.css'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = () => {
	return (
		<nav className={classes.nav}>
			<MenuList>
				<NavLink className={classes.link} to="/profile">
					<MenuItem className={classes.item}>
						<AccountCircleOutlinedIcon className={classes.icon}/>
						Profile
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/dialogs">
					<MenuItem className={classes.item}>
						<EmailOutlinedIcon className={classes.icon}/>
						Messages
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/users">
					<MenuItem className={classes.item}>
						<PeopleAltOutlinedIcon className={classes.icon}/>
						Users
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/chat">
					<MenuItem className={classes.item}>
						<ChatOutlinedIcon className={classes.icon}/>
						Chat
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/news">
					<MenuItem className={classes.item}>
						<AnnouncementOutlinedIcon className={classes.icon}/>
						News
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/music">
					<MenuItem className={classes.item}>
						<LibraryMusicOutlinedIcon className={classes.icon}/>
						Music
					</MenuItem>
				</NavLink>
				<NavLink className={classes.link} to="/setting">
					<MenuItem className={classes.item}>
						<SettingsOutlinedIcon className={classes.icon}/>
						Setting
					</MenuItem>
				</NavLink>
			</MenuList>
		</nav>
	)
}

export default Navbar
