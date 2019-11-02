
import Dialogs from './Dialogs'
import { sendMessage, updateNewMessageText } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}


export default compose(
  connect(mapStateToProps, { updateNewMessageText, sendMessage }),
  withAuthRedirect
)(Dialogs)
