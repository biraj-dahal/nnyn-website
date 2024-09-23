import React from 'react';
import './styles.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="about"> 
    <SectionHeader title='Purpose'/>
    <p id='about-text'>
    NNYN brings together Nepali youth in the US by providing mentorship, educational support, and cultural connections. We foster a united and empowered youth community by providing opportunities for cultural enrichment, leadership development, and professional growth. Our work seeks to connect, mentor, and empower Nepali youth. Supporting our mission helps create a strong, connected network of future Nepali leaders.

    </p>
  </section>
  );
};

export default About;