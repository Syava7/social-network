
import Dialogs from './Dialogs'
import { sendMessage, updateNewMessageText } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}


const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(Dialogs)

export default DialogsContainer
