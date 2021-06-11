
import MyPosts from './MyPosts'
import { actions } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'
import {AppStateType} from '../../../Redux/store';


const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost: actions.addPostAC})(MyPosts)

export default MyPostsContainer
