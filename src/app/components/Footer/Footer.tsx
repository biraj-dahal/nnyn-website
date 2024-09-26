import React from 'react';
import './styles.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <><footer id="footer">
      <div className="social_links">
      <a href="https://www.linkedin.com/in/kritika-pant2003/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/your-instagram-handle/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      <a href="mailto: nationalnepaliyouthnetwork@gmail.com">
      <FaEnvelope /> </a>
      </div>
      <div className = "footer-links">
      <p>Contact number: +12026999341</p>
      </div>
        <p>© 2024 NNYN. All Rights Reserved.</p>

    </footer>
    </>
  );
};

export default Footer;