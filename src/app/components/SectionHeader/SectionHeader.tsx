import React from 'react';
import './styles.scss'

interface SectionHeaderProps{
  title: string;
  color? : string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, color }) => {
  return (
    <h6 className='section-header' style= {{ color: color || 'rgb(166, 44, 44)'}}>{title}</h6>
  );
};

export default SectionHeader;