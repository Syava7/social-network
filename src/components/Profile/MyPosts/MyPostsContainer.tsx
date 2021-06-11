
import MyPosts, {DispatchPropsType, MapPropsType} from './MyPosts'
import { actions } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'
import {AppStateType} from '../../../Redux/store';


const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPostAC})(MyPosts)

export default MyPostsContainer
