import React from 'react';
import './styles.scss'

interface SectionHeaderProps{
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h6 className='section-header'>{title}</h6>
  );
};

export default SectionHeader;