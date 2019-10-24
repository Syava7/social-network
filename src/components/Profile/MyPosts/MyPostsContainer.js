import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextCreator } from './../../Redux/profileReducer'

const MyPostsContainer = (props) => {

  let state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const changePost = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text))
  }
  return (
    <div>
      <MyPosts updateNewPostText={changePost} 
               addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}/>
    </div>
  )
}

export default MyPostsContainer
