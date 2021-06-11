import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../Redux/profileReducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import { compose } from 'redux'
import {AppStateType} from '../../Redux/store';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
}

type PathParamsType = {
  userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends Component<PropsType> {

  refreshProfile () {
    let userId: number | null = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId as number)
    this.props.getStatus(userId as number)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType, prevState:PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
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

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId
  }
}


export default compose<React.ComponentType>(
                connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
                withRouter)(ProfileContainer)