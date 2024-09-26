import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './styles.scss'

const Events: React.FC = () => {
  const calendarSrc: string = "https://calendar.google.com/calendar/embed?src=5efae451950b62f28ca23ee32edcbe893b63cdb7e9f07f89099cd179585b53fb%40group.calendar.google.com&ctz=America%2FNew_York&hl=en";

  return (
    <div id="events" className="events">
      <SectionHeader title='Events Calendar' />
      <div className="calendar-container">
        <iframe
          src={calendarSrc}
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default Events;