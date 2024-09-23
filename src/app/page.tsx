import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Founders from './components/Founders/Founders';
import Events from './components/Events/Events';
import Resources from './components/Resources/Resources';
import JoinNNYN from './components/JoinNNYN/JoinNNYN';
import Cursor from './components/Cursor';
import MainPage from './components/MainPage/mainpage';

import "./page.scss"


const HomePage: React.FC = () => {
  return (
    <>
      <Cursor />

      <div className="mainWindow" id='mainWindow'>
        <Navbar />
        <MainPage />
        <Founders />
        <About />
        <Events />
        <Resources />
        <JoinNNYN />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
