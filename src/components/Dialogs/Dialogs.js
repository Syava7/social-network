import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = () => {
  return (
    <div className={classes.dialogsWrap} >
      <div>
        <DialogItem name='Vasya' id='1' />
        <DialogItem name='Kolya' id='2' />
        <DialogItem name='Petya' id='3' />
        <DialogItem name='Igor' id='4' />
        <DialogItem name='Vadim' id='5' />
      </div>
      <div>
        <MessageItem message='Hello' />
        <MessageItem message='How are you' />
        <MessageItem message='Hello world' />
      </div>
    </div>
  )
}

export default Dialogs
