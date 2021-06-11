import React, { Component } from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom'
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import LoginPage from '../Login/Login';
import { connect } from 'react-redux'
import { initializeApp } from '../../Redux/appReducer'
import { compose } from 'redux'
import Preloader from '../common/Preloader/Preloader';
import News from '../News/News';
import Music from '../Music/Music';
import Setting from '../Settings/Setting';
import {AppStateType} from '../../Redux/store';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Container className={classes.appWrapper}>
        <div className={classes.header}>
          <HeaderContainer />
        </div>
        <Navbar />
        <div className={classes.appWrapperContent}>
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
          <Route path='/users' render={ () => <UsersContainer pageTitle={'Samurai'} /> } />
          <Route path='/login' render={ () => <LoginPage /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/setting' render={ () => <Setting /> } />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)