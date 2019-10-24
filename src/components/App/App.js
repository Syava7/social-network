import React from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import { Route } from 'react-router-dom'
import Dialogs from '../Dialogs/Dialogs'




const App = () => {
  return (
    <Container className={classes.appWrapper}>
      <Header />
      <Navbar />
      <div className={classes.appWrapperContent}>
        <Route path='/dialogs' render={ Dialogs } />
        <Route path='/profile' render={ Profile }/>
      </div>
    </Container>
  );
}

export default App;