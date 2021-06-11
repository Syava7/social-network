import React from 'react'
import Post from './Post/Post'
import MyPostsFormRedux, {AddPostFormValueTypes} from './MyPostsForm'
import {PostType} from '../../../types/types';


export type MapPropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

  let postsElements = props.posts.map( post => <Post key={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}/>)

  const addPost = (values: AddPostFormValueTypes) => {
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
}

const MyPostsMemo = React.memo(MyPosts)

export default MyPostsMemo
