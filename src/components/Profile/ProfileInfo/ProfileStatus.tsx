import React, {useState, useEffect, ChangeEvent} from 'react'
import Input from '@material-ui/core/Input'
import classes from './ProfileInfo.module.css'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

// type StateType = {
//   editMode: boolean
//   status: string
// }

const ProfileStatus = (props: PropsType) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

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

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    autoFocus={ true }
                    onBlur={ deactivateEditMode }
                    value={ status }/>
          </div>}
    </div>
  );
}


export default ProfileStatus;
