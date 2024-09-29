import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './styles.scss';

const Events: React.FC = () => {
  const calendarSrc = "https://embed.styledcalendar.com/#COVF3dsjxKvcshFhxXvH";

  return (
    <section id="events" className="events">
      <SectionHeader title='Events Calendar' />
      <div className="calendar-container">
        <iframe
          src={calendarSrc}
          title="NNYN Event Calendar"
          className="styled-calendar-container"
          style={{ width: '100%', height: '100%' }} 
        ></iframe>
        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
      </div>
    </section>
  );
};

export default Events;