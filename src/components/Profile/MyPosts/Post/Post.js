import React from 'react'
import classes from './Post.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Post = ({message, likes}) => {
  return (
    <div>
      <div className={classes.wrap}>
        <AccountCircleIcon className={classes.icon} fontSize='large'/>
        {message}
      </div>
        <div>Like {likes}</div>
    </div>
  )
}

export default Post
