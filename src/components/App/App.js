import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';




const App = () => {
  return (
    <Container className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </Container>
  );
}

export default App;