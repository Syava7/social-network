import React from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom'
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';





const App = (props) => {
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
      </div>
    </Container>
  );
}

export default App;