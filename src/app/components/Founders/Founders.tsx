'use client';
import React, { useState } from 'react';
import './styles.scss'
import SectionHeader from '../SectionHeader/SectionHeader';

import Priyanka from './../../../../public/priyanka.jpg'
import Biraj from './../../../../public/biraj.jpg'
import Kritika from './../../../../public/kritika.jpg'
import Divya from './../../../../public/divya.jpg'

const founders_array =[
  {src:
    Priyanka,
    name: "Priyanka Shrestha",
    university: "Stanford University",
    major: "CS + Biomed"
  },
  {src:
    Biraj,
    name: "Biraj Dahal",
    university: "Howard University",
    major: "CS + Math"
  },
  {src:
    Kritika,
    name: "Kritika Pant",
    university: "Howard University",
    major: "CS"
  },
  {src:
    Divya,
    name: "Divya Khatri",
    university: "Columbia University",
    major: "CS"
  },
]

const FounderItem: React.FC<FoundersProps> = ({ founder, updateActiveImage, index }) => {
  return (
    <div className='founder-item' onClick={() => updateActiveImage(founder)}>
      <img src={founder.src} alt={founder.name} />
      <h3>{founder.name}</h3>
      <p>{founder.university}</p>
      <p>{founder.major}</p>
    </div>
  );
};

interface FoundersProps{
  founder:{
  src: string,
  name: string,
  university: string,
  major: string,};
  updateActiveImage: (index: number) => void;
}
const Founders: React.FC<FoundersProps> = ({ founder, updateActiveImage}) => {

  const [activeImage, setActiveImage] = useState(1);
  return (
    <section id="founders" className="founders"> 
    <SectionHeader title='Founders'/>
    <div className='gallery'>
      <div className='gallery-counter'>

      </div>
      {founders_array.map((founder, index) => (
        <FounderItem 
        key={index}
        founder={founder}
        updateActiveImage={setActiveImage}
        index={index}

        />
      ))}
    </div>
  </section>
  );
};

export default Founders;