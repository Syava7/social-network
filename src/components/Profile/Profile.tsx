import React from 'react'
// import classes from './Profile.module.css'
import ProfileInfo, {PropsTypeProfile} from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'




const Profile: React.FC<PropsTypeProfile> = (props) => {
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
