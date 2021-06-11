import React from 'react'
// import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {ProfileType} from '../../types/types';

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}


const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status} 
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile
