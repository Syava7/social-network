import React, { useState } from 'react'
import Input from '@material-ui/core/Input'

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

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
      <div>
        {!editMode 
          ? <div>
              <span onDoubleClick={ activateEditMode }>{ props.status || 'No status'}</span>
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
