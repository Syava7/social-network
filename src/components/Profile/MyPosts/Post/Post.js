import React from 'react'
import classes from './Post.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Post = ({message, likesCount}) => {
  return (
    <div>
      <div className={classes.wrap}>
        <AccountCircleIcon className={classes.icon} fontSize='large'/>
        {message}
      </div>
        <div>Like {likesCount}</div>
    </div>
  )
}

export default Post
