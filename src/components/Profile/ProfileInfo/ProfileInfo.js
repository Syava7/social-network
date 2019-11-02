import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img src={props.profile.photos.large} />
      <ProfileStatus status={props.status}  
                     updateStatus={props.updateStatus}/>
    </div>
  )
}

export default ProfileInfo
