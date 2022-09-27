import React from 'react';
import './EventPage.scss';

export const EventPage: React.FC = () => {
  return (
    <div className="event-page">
      <div className="event-page__wrapper">
        <img 
          src={`${process.env.PUBLIC_URL}/images/birthday-cake.png`}
          alt="birthday cake"
          className="event-page__image"
        />

        <div className="event-page__content">
          <h2 className="event-page__title">Birthday Bash</h2>
          <p className="event-page__host">
            Hosted by <span className="event-page__host-name">Elysia</span>
          </p>
        </div>
      </div>
    </div>
  );
}