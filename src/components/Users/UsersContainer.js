import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/usersReducer'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber)=> {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount)=> {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer

