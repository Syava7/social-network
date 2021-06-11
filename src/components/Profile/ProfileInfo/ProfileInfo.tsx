import React, {ChangeEvent} from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import User from '../../../assets/images/User.jpg'
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from '../../../types/types';

type PropsTypeProfile = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
}

type ProfileDataPropsType = {
  profile: ProfileType
}

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

const ProfileInfo: React.FC<PropsTypeProfile> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
       savePhoto(e.target.files[0])
    }
  }


  return (
    <div className={classes.profileInfoWrap}>
      <div>
        <img alt='' src={profile.photos.large || User} />
        <div>
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
        </div>
        
        <ProfileStatus status={status}  
                       updateStatus={updateStatus}/>
      </div>
   
      <div className={classes.data}>
        <ProfileData  profile={profile}/>
      </div>

    </div>
  )
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
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
          My professional skills: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
          About me: {profile.aboutMe}  
        </div>
        <div>
          Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
          })}  
        </div>
    </div>
  )
}


const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  return (
    <div>
      {contactTitle} : {contactValue}
    </div>
  )
}

export default ProfileInfo
