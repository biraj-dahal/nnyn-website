import React, { useEffect, useState } from 'react';
import './styles.scss';  
import Navbar from '../Navbar/Navbar';

const MainPage: React.FC = () => {
  const [isBigTextAnimated, setIsBigTextAnimated] = useState<boolean>(false);
  const [visibleWords, setVisibleWords] = useState<number>(0);
  
  const mainWords = ['Unite', 'Navigate', 'Excel'];

  useEffect(() => {
    const bigTextTimeout = setTimeout(() => {
      setIsBigTextAnimated(true);

      const timers = mainWords.map((_, index) => 
        setTimeout(() => {
          setVisibleWords((prev) => prev + 1);
        }, (index + 1) * 600) 
      );

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }, 500); 

    return () => clearTimeout(bigTextTimeout); 
  }, []); 

  return (
    <>
      <Navbar />

      <section className="mainpage">
        <h1 
          id='main-big-text' 
          className={`transition-all duration-700 ease-in-out ${isBigTextAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          National Nepali<br />
          Youth<br />
          Network
        </h1>
        <ul className='mainwords'>
          {mainWords.slice(0, visibleWords).map((word, index) => (
            <li 
              key={word} 
              className={`transition-transform duration-500 ease-in-out transform ${visibleWords > index ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              {word}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MainPage;