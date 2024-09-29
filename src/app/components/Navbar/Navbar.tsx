import React, { useEffect, useState } from 'react';
import './styles.scss';

const navItems = [
  { name: "Founders", id: "founders" },
  { name: "Purpose", id: "about" },
  { name: "Events", id: "events" },
  { name: "Resources", id: "resources" },
  { name: "Join NNYN!", id: "join" },
];

const Navbar: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`navbar-window transition-opacity duration-700 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ name, id }) => (
          <div key={id} className="group">
            <a
              onClick={() => {
                handleScrollToSection(id);
                setIsMenuOpen(false); // Close menu after click
              }}
              className="group-hover:text-blue-500 transition-all duration-300 ease-in-out transform group-hover:scale-110"
              style={{ cursor: 'pointer' }}
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;