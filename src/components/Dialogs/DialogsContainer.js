
import Dialogs from './Dialogs'
import { sendMessage, updateNewMessageText } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}


const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(Dialogs)

export default DialogsContainer
