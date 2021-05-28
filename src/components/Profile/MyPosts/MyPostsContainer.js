
import MyPosts from './MyPosts'
import { addPostAC } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, { addPostAC })(MyPosts)

export default MyPostsContainer
