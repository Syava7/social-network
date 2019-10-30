
import MyPosts from './MyPosts'
import { addPost, updateNewPostText } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts)

export default MyPostsContainer
