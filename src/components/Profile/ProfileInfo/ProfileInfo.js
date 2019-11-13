import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }
  return (
    <div>
      <img src={profile.photos.large} />
      <ProfileStatus status={status}  
                     updateStatus={updateStatus}/>
    </div>
  )
}

export default ProfileInfo
