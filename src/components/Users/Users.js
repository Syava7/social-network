import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'



const Users = ({currentPage, onPageChanged, totalUsersCount,
                pageSize, followingInProgress, unfollow, follow, users }) => {
  return (
    <div>
      <Paginator currentPage={currentPage} 
                 onPageChanged={onPageChanged}
                 totalUsersCount={totalUsersCount}
                 pageSize={pageSize}/>
      {
        users.map( user => <User user={user} 
                                       key={user.id}
                                       followingInProgress={followingInProgress}
                                       unfollow={unfollow}
                                       follow={follow}/> 
           
            
        )
      }
    </div>
  )
}

export default Users
