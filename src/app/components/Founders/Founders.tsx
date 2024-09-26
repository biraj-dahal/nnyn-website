'use client';
import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from '../SectionHeader/SectionHeader';
import cn from "classnames";
import Image from 'next/image';
import Priyanka from './../../../../public/priyanka.jpg';
import Biraj from './../../../../public/biraj.jpg';
import Kritika from './../../../../public/kritika.jpg';
import Divya from './../../../../public/divya.jpg';

import { StaticImageData } from 'next/image';

const founders_array = [
  {
    src: Priyanka,
    name: "Priyanka Shrestha",
    university: "Stanford University",
    major: "CS + Biomed"
  },
  {
    src: Biraj,
    name: "Biraj Dahal",
    university: "Howard University",
    major: "CS + Math"
  },
  {
    src: Kritika,
    name: "Kritika Pant",
    university: "Howard University",
    major: "CS"
  },
  {
    src: Divya,
    name: "Divya Khatri",
    university: "Columbia University",
    major: "CS"
  },
];
const FounderItem: React.FC<FoundersProps> = ({ src, name, university, major, updateActiveImage, index }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
    className={cn("founder-item-block", { "is-reveal": onScreen })}
    ref={ref}
  >
      <div></div>
      <div className={'founder-item'}>
        <div className='founder-info'>
          <h1 className='founder-name'>{name}</h1>
          <h6 className='founder-uni'>{university}</h6>
          <p className='founder-major'>{major}</p>
        </div>
        <div className='founder-item-image'>
          <Image src={src} alt={name} />
        </div>
      </div>
      <div />
    </div>
  );
};


interface FoundersProps {
  src: StaticImageData; 
  name: string;
  university: string;
  major: string;
  updateActiveImage: (index: number) => void;
  index: number; 
}

const Founders: React.FC = () => {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);
  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {

      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section id="founders" className="founders">
      <SectionHeader title='Founders' />
      <div className='founder-gallery'>
        
      <div className='founder-counter'>
      <span>{activeImage}</span>
        <span className='divider'></span>
        <span>{founders_array.length}</span>
      
      </div>
      
      {founders_array.map((image, index) =>(
        <FounderItem 
        key={image.name}
        index={index}
        { ... image}
        updateActiveImage={handleUpdateActiveImage}
        />
      ))}
      </div>
    </section>
  );
};

export default Founders;