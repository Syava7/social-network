import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const MyPosts = (props) => {

  let postsElements = props.posts.map( post => <Post key={post.id} id={post.id} message={post.message} 
                                            likesCount={post.likesCount}/>) 

  const addPost = () => {
     props.addPost()
  }

  const changePost = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <TextField onChange={ changePost }
                     value={props.newPostText}
                     placeholder='Enter your post' />
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
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
