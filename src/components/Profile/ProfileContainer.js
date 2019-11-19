import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'





class ProfileContainer extends Component {

  refleshProfile () {
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

  componentDidMount() {
    this.refleshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refleshProfile()
    }
  }

  render() {
    
    return (
      <div>
        <Profile {...this.props}
          isOwner={!this.props.match.params.userId} 
          profile={this.props.profile} 
          status={this.props.status} 
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}/>
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
                connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
                withRouter)(ProfileContainer)