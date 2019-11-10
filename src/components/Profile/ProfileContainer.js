import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'




class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    
    return (
      <div>
        <Profile {...this.props} 
          profile={this.props.profile} 
          status={this.props.status} 
          updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId
  }
}


export default compose(
                connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
                withRouter)(ProfileContainer)