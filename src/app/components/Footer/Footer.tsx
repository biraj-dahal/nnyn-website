import React from 'react';
import './styles.scss';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="social_links">
        <a
          href="https://www.linkedin.com/company/national-nepali-youth-network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/nationalnepaliyouthnetwork/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:nationalnepaliyouthnetwork@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+19842705891"> {/* Added phone link */}
          <FaPhone />
        </a>
      </div>
      <div className="footer-rights">
        <p>© {new Date().getFullYear()} NNYN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;