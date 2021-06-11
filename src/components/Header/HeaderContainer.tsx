import React, { Component } from 'react'
import Header, {DispatchPropsType, MapPropsType} from './Header'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authReducer'
import {AppStateType} from '../../Redux/store';



class HeaderContainer extends Component<MapPropsType & DispatchPropsType> {

  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  } as MapPropsType
}

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer)