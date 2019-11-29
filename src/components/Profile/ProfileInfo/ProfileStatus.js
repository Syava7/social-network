import React, { useState, useEffect } from 'react'
import Input from '@material-ui/core/Input'
import classes from './ProfileInfo.module.css'

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status] )

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

   const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }


  return (
      <div className={classes.status}>
        {!editMode 
          ? <div>
              Status: <span onDoubleClick={ activateEditMode }>{ props.status || 'No status'}</span>
            </div> 
          : <div>
            <Input  onChange={ onStatusChange } 
                    autoFocus={ true } onBlur={ deactivateEditMode } 
                    value={ status }/>
          </div>}
    </div>
  );
}


export default ProfileStatus;
