import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { EventPage } from './components/EventPage';
import { LandingPage } from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/event"
          element={<EventPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
