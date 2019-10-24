import React from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import { Route } from 'react-router-dom'
import DialogsContainer from '../Dialogs/DialogsContainer';





const App = (props) => {
  return (
    <Container className={classes.appWrapper}>
      <Header />
      <Navbar />
      <div className={classes.appWrapperContent}>
        <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/> } />
        <Route path='/profile' render={ () => <Profile store={props.store} /> }/>
      </div>
    </Container>
  );
}

export default App;