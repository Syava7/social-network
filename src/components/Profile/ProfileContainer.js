import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'



class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
    
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer))