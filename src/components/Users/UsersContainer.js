import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/usersReducer'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId)=> {
      dispatch(followAC(usersId))
    },
    unfollow: (usersId)=> {
      dispatch(unfollowAC(usersId))
    },
    setUsers: (users)=> {
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

