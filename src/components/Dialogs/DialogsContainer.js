import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageTextCreator } from './../Redux/dialogsReducer'

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage

  const sendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const newMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <div>
      <Dialogs updateNewMessageText={newMessageChange}
               sendMessage={sendMessageClick}
               dialogsPage={state} />
    </div>
  )
}

export default DialogsContainer
