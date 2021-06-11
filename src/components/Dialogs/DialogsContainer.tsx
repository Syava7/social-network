
import Dialogs from './Dialogs'
import { actions } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import {AppStateType} from '../../Redux/store';
import React from 'react';


const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}



export default compose<React.ComponentType>(
  connect(mapStateToProps, {...actions}),
  withAuthRedirect
)(Dialogs)
