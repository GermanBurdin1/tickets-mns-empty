import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEvent from '../pages/createEvents';
import EventDetail from '../pages/eventDetails';
import MainPage from '../components/mainPage';
import Header from '../components/header';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
