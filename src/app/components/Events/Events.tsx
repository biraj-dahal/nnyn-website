import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './styles.scss';

const Events: React.FC = () => {
  // URL for the styled calendar
  const calendarSrc = "https://embed.styledcalendar.com/#COVF3dsjxKvcshFhxXvH";

  return (
    <div id="events" className="events">
      <SectionHeader title='Events Calendar' />
      <div className="calendar-container">
        <iframe
          src={calendarSrc}
          title="Styled Calendar"
          className="styled-calendar-container"
          style={{ width: '100%', height: '100%' }} // Ensuring full width and height
        ></iframe>
        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
      </div>
    </div>
  );
};

export default Events;