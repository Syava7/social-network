import React from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom'
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';





const App = (props) => {
  return (
    <Container className={classes.appWrapper}>
      <Header />
      <Navbar />
      <div className={classes.appWrapperContent}>
        <Route path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile' render={ () => <ProfileContainer/> }/>
        <Route path='/users' render={ () => <UsersContainer /> } />
      </div>
    </Container>
  );
}

export default App;