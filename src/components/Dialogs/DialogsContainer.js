import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageTextCreator } from './../Redux/dialogsReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text)=> {
      dispatch(updateNewMessageTextCreator(text))
    },
    sendMessage: ()=> {
      dispatch(sendMessageCreator())
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
