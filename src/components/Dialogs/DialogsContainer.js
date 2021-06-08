
import Dialogs from './Dialogs'
import { actions } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageAC: (newMessageText) => {
            dispatch(actions.sendMessageAC(newMessageText))
        }
    }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
