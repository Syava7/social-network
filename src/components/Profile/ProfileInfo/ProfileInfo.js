import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import User from '../../../assets/images/User.jpg'
import classes from './ProfileInfo.module.css'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoselected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }


  return (
    <div className={classes.profileInfoWrap}>
      <div>
        <img src={profile.photos.large || User} />
        <div>
          {isOwner && <input type={'file'} onChange={onMainPhotoselected} /> }
        </div>
        
        <ProfileStatus status={status}  
                       updateStatus={updateStatus}/>
      </div>
   
      <div className={classes.data}>
        <ProfileData  profile={profile} isOwner={isOwner}/>
      </div>

    </div>
  )
}

const ProfileData = ({profile}) => {
  return (
    <div>
        <div>
          FullName: {profile.fullName}  
        </div>
        <div>
          Looking for a job: {profile.lookingForAJob ? 'no' : 'yes'}  
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
