
import MyPosts from './MyPosts'
import { addPost } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer
