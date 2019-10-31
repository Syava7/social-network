import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import * as axios from 'axios'
import { setUserProfile } from '../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'


class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
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



export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))