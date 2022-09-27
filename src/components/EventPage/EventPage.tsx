import React from 'react';
import './EventPage.scss';

import { BsCalendar2DateFill } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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

          <div className="event-page__details">
            <div className="event-page__detail">
              <div className="event-page__detail-image">
                <BsCalendar2DateFill />
              </div>

              <div className="event-page__detail-content">
                <div>
                  <h3 className="event-page__detail-heading">
                    18 August 6:00PM
                  </h3>

                  <p className="event-page__detail-subheading">
                    to
                    <span className="event-page__detail-subheading--strong"> 19 August 1:00PM </span> 
                    UTC +10
                  </p>
                </div>
        
                <MdArrowForwardIos />
              </div>
            </div>
            <div className="event-page__detail">
              <div className="event-page__detail-image">
                <HiOutlineLocationMarker />
              </div>

              <div className="event-page__detail-content">
                <div>
                  <h3 className="event-page__detail-heading">
                    Street name
                  </h3>

                  <p className="event-page__detail-subheading">
                    Suburb, State, Postcode
                  </p>
                </div>
        
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>

        <img 
          src={`${process.env.PUBLIC_URL}/images/birthday-cake.png`}
          alt="birthday cake"
          className="event-page__image event-page__image--desktop"
        />
      </div>
    </div>
  );
}