import { connect } from 'react-redux';
import React, { Component } from 'react'
import { follow, unfollow, setCurrentPage, toogleIsFollowingProgress, getUsers } from '../../Redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { getUserss, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/usersSelectors'





class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  
  render () {
    return (
      <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount} 
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}        
             followingInProgress={this.props.followingInProgress}/>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUserss(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}



export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, 
                                          toogleIsFollowingProgress, getUsers })(UsersContainer)



