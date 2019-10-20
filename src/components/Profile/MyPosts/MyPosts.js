import React from 'react'
// import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        
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
