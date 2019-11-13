import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import MyPostsFormRedux from './MyPostsForm'

const MyPosts = React.memo(props => {

  let postsElements = props.posts.map( post => <Post key={post.id} id={post.id} message={post.message} 
                                            likesCount={post.likesCount}/>) 

  const addPost = (values) => {
     props.addPost(values.newPostText)
  }

  return (
    <div>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={addPost} />
      <div>
        { postsElements }
      </div>
    </div>
  )
})

export default MyPosts
