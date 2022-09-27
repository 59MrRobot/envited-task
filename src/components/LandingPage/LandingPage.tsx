import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

import { TbConfetti } from 'react-icons/tb';

export const LandingPage: React.FC = React.memo(
  () => (
    <div className="landing-page">
      <div className="landing-page__wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/images/landing-page.svg`}
          alt="Event"
          className="landing-page__image landing-page__image--desktop"
        />

        <div className="landing-page__content">
          <div className="landing-page__text">
            <h1 className="landing-page__title">
              Imagine if
              <span className="landing-page__title-special"> Snapchat </span>
              had events.
            </h1>

            <p className="landing-page__description">
              Easily host and share events with your friends across any social media.
            </p>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/images/landing-page.svg`}
            alt="Event"
            className="landing-page__image"
          />

          <Link
            to="/event"
            className="landing-page__button"
          >
            <TbConfetti /> Create my event
          </Link>
        </div>
      </div>
    </div>
  ),
)