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

class App extends Component {

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
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/login' render={ () => <LoginPage /> } />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)