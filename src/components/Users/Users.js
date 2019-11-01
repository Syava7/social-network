import React from 'react'
import Button from '@material-ui/core/Button'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/User.jpg'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { NavLink } from 'react-router-dom'
import {usersAPI} from '../../api/api'


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        <ButtonGroup>
          {
            pages.map(page => {
              return <Button className={props.currentPage === page && classes.selectedPage}
                              onClick={ (e) => {
                              props.onPageChanged(page)
                              }}>{page}
                      </Button>
              
            })
          }
        </ButtonGroup>
      </div>
      {
        props.users.map( user => <div key={user.id}>
            <div>
              <div>
                <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.photo}/>
                </NavLink>
              </div>
              <div>
                {user.followed 
                ? <Button disabled={props.followingInProgress.some(id => id === user.id)} 
                    onClick={()=> { props.unfollow(user.id) }} 
                    color='secondary' 
                    variant='contained'>unfollow</Button>
    
                : <Button disabled={props.followingInProgress.some(id => id === user.id)} 
                    onClick={()=> { props.follow(user.id) }} 
                    color='primary' 
                    variant='contained'>follow</Button>}
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
