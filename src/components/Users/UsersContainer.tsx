import { connect } from 'react-redux';
import React, { Component } from 'react'
import { follow, unfollow, getUsers } from '../../Redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { getUserss, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/usersSelectors'
import {UserType} from '../../types/types';
import {AppStateType} from '../../Redux/store';
import {compose} from 'redux';

type MapStatePropsType = {
  pageSize: number
  currentPage: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends Component<PropsType> {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize)
  }

  
  render () {
    return (
      <>
       <h2>{this.props.pageTitle}</h2>
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


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUserss(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}


export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer)



