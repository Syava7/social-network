import React from 'react'
import Button from '@material-ui/core/Button';
import classes from './Users.module.css'

const Users = (props) => {
  return (
    <div>
      {
        props.users.map( user => <div key={user.id}>
            <div>
              <div>
                <img src={user.photoUrl} className={classes.photo}/>
              </div>
              <div>
                {user.followed 
                ? <Button onClick={()=> {props.unfollow(user.id)}} color='secondary' variant='contained'>unfollow</Button> 
                : <Button onClick={()=> {props.follow(user.id)}} color='primary' variant='contained'>follow</Button>}
              </div>
            </div>
            <div>
              <div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users
