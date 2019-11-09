import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../Redux/authReducer'



class HeaderContainer extends Component {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)