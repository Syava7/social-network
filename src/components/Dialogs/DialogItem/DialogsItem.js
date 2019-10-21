import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './DialogsItem.module.css'

const DialogItem = ({name, id}) => {
  return (
    <div>
      <NavLink className={classes.item} to={'dialogs/' + id}>
        {name}
      </NavLink>
    </div>
  )
}

export default DialogItem
