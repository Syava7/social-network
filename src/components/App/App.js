import React from 'react';
import classes from './App.module.css';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';




const App = () => {
  return (
    <Container className={classes.appWrapper}>
      <Header />
      <Navbar />
      <Profile />
    </Container>
  );
}

export default App;