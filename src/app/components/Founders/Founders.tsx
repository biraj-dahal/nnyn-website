'use client';

import React, { useState } from 'react';
import './styles.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import Image from 'next/image';
import { FaLinkedin, FaEnvelope} from 'react-icons/fa';


import Priyanka from './../../../../public/priyanka.jpg';
import Biraj from './../../../../public/biraj.jpg';
import Kritika from './../../../../public/kritika.jpg';
import Divya from './../../../../public/divya.jpg';

const founders_array = [
  {
    src: Priyanka,
    name: "Priyanka Shrestha",
    university: "Stanford University",
    major: "CS + Medicine",
    bio: "Priyanka is a Master’s student at Stanford, juggling AI and medicine like a pro, and secretly plotting to make health tech cooler than your favorite app!",
    linkedin: "https://www.linkedin.com/in/priyanka-shrestha-/",
    email: "priyankaspace@gmail.com"
  },
  {
    src: Biraj,
    name: "Biraj Dahal",
    university: "Howard University",
    major: "CS + Math",
    bio: "Biraj, a math geek and code ninja, solves real-world puzzles faster than you can say ‘robotics’—just don’t ask him to fix your printer!",
    linkedin: "https://www.linkedin.com/in/birajdahal/",
    email: "biraj.dahal@bison.howard.edu"
  },
  {
    src: Kritika,
    name: "Kritika Pant",
    university: "Howard University",
    major: "CS",
    bio: "Kritika is a coding enthusiast at Howard, on a quest to conquer the software universe—one challenge at a time (while avoiding coffee spills)!",
    linkedin: "https://www.linkedin.com/in/kritika-pant2003/",
    email: "kritika.pant@bison.howard.edu"
  },
  {
    src: Divya,
    name: "Divya Khatri",
    university: "Columbia University",
    major: "CS",
    bio: "Divya is a tech-savvy wizard at Columbia, brewing up social good and turning math into magic while designing CAD prototypes like a boss!",
    linkedin: "https://www.linkedin.com/in/divya-khatrii/",
    email: "divya.khatri@columbia.edu"
  },
];

const Founders: React.FC = () => {
  return (
    <section id="founders" className="founders center">
      <SectionHeader title="Founders" color="white"/>

      <div className='founders-container'>
        {founders_array.map((founder, index) => (
          <div key={index} className='founder-card'>
            <Image 
                src={founder.src} 
                alt={founder.name} 
                className="founder-image"
                width={200}
                height={200}
            />
            <div className='founder-info'>
              <h1 className="founder-name">{founder.name}</h1>
              <h6 className="founder-uni">{founder.university}</h6>
              <p className="founder-major">{founder.major}</p>
            </div>
            <div className='founder-bio'>
              <div className='social-icons'>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className='icon' />
                  </a>
                  <a href={`mailto:${founder.email}`}>
                      <FaEnvelope className='icon' />
                  </a>
              </div>
              <p>{founder.bio}<br /><br /></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;