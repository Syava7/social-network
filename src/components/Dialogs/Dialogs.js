import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import DialogsFormRedux from './DialogsForm'


const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogItem = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  let messageItem = state.messages.map(message => <MessageItem message={message.message} key={message.id}/>)
  

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  }

  return (
    <div>
      <div className={classes.dialogsWrap} >
        <div>
          { dialogItem }
        </div>
        <div>
          { messageItem }
        </div>
      </div>
      <DialogsFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

export default Dialogs
