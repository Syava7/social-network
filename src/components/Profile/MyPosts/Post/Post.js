import React from 'react'
import classes from './Post.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Post = () => {
  return (
    <div>
      <div className={classes.wrap}>
        <AccountCircleIcon className={classes.icon} fontSize='large'/>
        post 1
      </div>
        <div>Like</div>
    </div>
  )
}

export default Post
