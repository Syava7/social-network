import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/User.jpg'
import classes from './Users.module.css'
import {UserType} from '../../types/types';

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (id: number) => void
  follow: (id: number) => void
}

const User = ({user, followingInProgress, unfollow, follow }: PropsType) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img alt='' src={user.photos.small !== null ? user.photos.small : userPhoto} className={classes.photo}/>
          </NavLink>
        </div>
        <div className={classes.btnFollow}>
          {user.followed 
          ? <Button disabled={followingInProgress.some(id => id === user.id)} 
              onClick={()=> { unfollow(user.id) }} 
              color='secondary' 
              variant='contained'>unfollow</Button>

          : <Button disabled={followingInProgress.some(id => id === user.id)} 
              onClick={()=> { follow(user.id) }} 
              color='primary' 
              variant='contained'>follow</Button>}
        </div>
      </div>
      <div>      
        <div>{user.name}</div>
        <div>{user.status}</div>    
      </div>
    </div>
  )
}

export default User
