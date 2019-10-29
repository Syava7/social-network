import React from 'react'
import Button from '@material-ui/core/Button';
import classes from './Users.module.css'
import userPhoto from './../../assets/images/User.jpg'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Users = (props) => {
  return (
    <div>
      <div>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button className={classes.selectedPage}>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonGroup>
      </div>
      {
        props.users.map( user => <div key={user.id}>
            <div>
              {/* <div>
                <img src={user.photos.small =! null ? user.photos.small : userPhoto} className={classes.photo}/>
              </div> */}
              <div>
                {user.followed 
                ? <Button onClick={()=> {props.unfollow(user.id)}} color='secondary' variant='contained'>unfollow</Button> 
                : <Button onClick={()=> {props.follow(user.id)}} color='primary' variant='contained'>follow</Button>}
              </div>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users
