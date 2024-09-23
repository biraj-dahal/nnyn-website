import React from 'react';
import './styles.scss';

const Navbar: React.FC = () => {
  return (
    <div className='navbar-window'>
      <div>
      <a href='#founders'> Founders</a>
      </div>
      <div>
        <a href='#about'> Purpose</a>
      </div>
      <div>
      <a href='#events'> Events</a>
      </div>
      <div>
      <a href='#resources'> Resources</a>
      </div>
      <div>
      <a href='#joinus'> Join NNYN!</a>
      </div>
    </div>
  );
};

export default Navbar;