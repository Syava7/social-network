import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import MessageItem from './MessageItem/MessageItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Redirect} from 'react-router-dom'


const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogItem = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  let messageItem = state.messages.map(message => <MessageItem message={message.message} key={message.id}/>)
  let newMessageText = state.newMessageText
  
  
  const sendMessageClick = () => {
    props.sendMessage()
  }

  const newMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
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
      <div>
        <TextField placeholder='Enter your message'
                    onChange={ newMessageChange }
                    value={newMessageText} />
      </div>
      <div className={classes.button}>
        <Button variant="contained" 
                color="primary"
                onClick={ sendMessageClick }>
                Add message
        </Button>
      </div>
    </div>
  )
}

export default Dialogs
