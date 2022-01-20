import React, {FC} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {UserType} from '../../types/types';
import {UserSearchForm} from './UserSearchForm';
import {FilterType} from '../../Redux/usersReducer';


type UsersPropsType = {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (filter: FilterType) => void
}

const Users: FC<UsersPropsType> = ({
                                     currentPage, onPageChanged, onFilterChanged, totalUsersCount,
                                     pageSize, followingInProgress, unfollow, follow, users
                                   }) => {
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
