import React, {FC, useEffect} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {UserSearchForm} from './UserSearchForm';
import {FilterType, getUsers} from '../../Redux/usersReducer';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUserss
} from '../../Redux/usersSelectors';
import {useHistory} from 'react-router';
import * as queryString from 'querystring';


type UsersPropsType = {}


const Users: FC<UsersPropsType> = (props) => {
  const users = useSelector(getUserss)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()
  // const history = useHistory()
  //
  // useEffect(() => {
  //   history.push({
  //     pathname: '/users',
  //     search: `?term=${filter.term}&friend=${filter.friend}&page${currentPage}`
  //   })
  // }, [filter, currentPage])


  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter))
  }, [])


  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter))
  }

  const follow = (userId: number) => {
    dispatch(follow(userId))
  }

  const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

  return (
    <div>

      <UserSearchForm onFilterChanged={onFilterChanged}/>


      <div>
        {
          users.map(user => <User user={user}
                                  key={user.id}
                                  followingInProgress={followingInProgress}
                                  unfollow={unfollow}
                                  follow={follow}/>
          )
        }
      </div>

      <Paginator currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalUsersCount={totalUsersCount}
                 pageSize={pageSize}/>

    </div>
  )
}

export default Users
