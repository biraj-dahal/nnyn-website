'use client';
import React from 'react';
import About from './components/About/About';
import Founders from './components/Founders/Founders';
import Events from './components/Events/Events';
import Resources from './components/Resources/Resources';
import JoinNNYN from './components/JoinNNYN/JoinNNYN';
import Cursor from './components/Cursor';
import MainPage from './components/MainPage/mainpage';
import './page.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <Cursor />
      <div className="mainWindow" id='mainWindow'>
        
        <div className="section"><MainPage /></div>
        <div className="section" id="founders"><Founders /></div>
        <div className="section" id="about"><About /></div>
        <div className="section" id="events"><Events /></div>
        <div className="section" id="resources"><Resources /></div>
        <div className="section" id="join"><JoinNNYN /></div>
      </div>
    </>
  );
};



export default HomePage;