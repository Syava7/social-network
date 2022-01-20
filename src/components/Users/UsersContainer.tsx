import {useSelector} from 'react-redux';
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import {getIsFetching} from '../../Redux/usersSelectors'

type UserPagePropsType = {
  pageTitle: string
}

const UserPage: React.FC<UserPagePropsType> = (props) => {

  const isFetching = useSelector(getIsFetching)

  return (
    <>
      <h2>{props.pageTitle}</h2>
      { isFetching ? <Preloader /> : null }
      <Users/>
    </>
  )
}

export default UserPage




