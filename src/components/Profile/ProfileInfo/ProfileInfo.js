import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import User from '../../../assets/images/User.jpg'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }
  return (
    <div>
      <img src={profile.photos.large || User} />

      <div>
        <div>
          FullName: {profile.fullName}  
        </div>
        <div>
          Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}  
        </div>
        { profile.lookingForAJob && 
        <div>
          My professional skills: {profile.lookingForAJobDescroption}
        </div>
        }
        <div>
          About me: {profile.aboutMe}  
        </div>
        <div>
          Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
          })}  
        </div>
      </div>

      <ProfileStatus status={status}  
                     updateStatus={updateStatus}/>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
      {contactTitle} : {contactValue}
    </div>
  )
}

export default ProfileInfo
