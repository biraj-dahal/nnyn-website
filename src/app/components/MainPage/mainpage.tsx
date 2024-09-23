import React from 'react';
import './styles.scss';  

const MainPage: React.FC = () => {
  return (
    <section className="mainpage"> 

      <h1 id='main-big-text'>
  National Nepali<br />
  Youth<br />
  Network
</h1>
<ul className='mainwords'>
        <li>Unite</li>
        <li>Navigate</li>
        <li>Excel</li>
      </ul>
    </section>
  );
};

export default MainPage;