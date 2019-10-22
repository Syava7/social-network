import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const MyPosts = () => {

  const addPost = (changeInput) => {
    
    
    
  }

  const changeInput = (e) => {
    const text = e.target.value
    console.log(text)
  }
 
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <TextField label="Name" onChange={ changeInput } value='syava'/>
        </div>
        <div className={classes.button}>
          <Button
              onClick={ addPost } 
              variant="contained" 
              color="primary" >
            Add post
          </Button>
        </div>
      </div>
      <div>
        <Post message='Hello guys' likes='15'/>
        <Post message='Nice to meet you' likes='20'/>
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  )
}

export default MyPosts
