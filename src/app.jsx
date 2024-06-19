import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TicketList from './components/TicketList';
import CreateEvent from './pages/CreateEvent';
import EventDetail from './pages/EventDetail';
import './App.css';

const ticketsData = [
  { id: 1, title: 'claudeo placeat ta...', date: '19/06/2024 à 15:26:40', image: 'path_to_image_1' },
  { id: 2, title: 'zerahbk', date: '21/06/2024 à 17:39:51', image: 'path_to_image_2' },
  { id: 3, title: 'voluptate cedo suff...', date: '05/07/2024 à 10:38:36', image: 'path_to_image_3' },
  { id: 4, title: 'tubineus alveus tol...', date: '18/07/2024 à 16:59:08', image: 'path_to_image_4' },
  { id: 5, title: 'ambitus tantum pe...', date: '19/06/2024 à 15:26:40', image: 'path_to_image_5' },
  { id: 6, title: 'eveniet sollers deni...', date: '21/06/2024 à 17:39:51', image: 'path_to_image_6' },
  { id: 7, title: 'sponte commodo s...', date: '05/07/2024 à 10:38:36', image: 'path_to_image_7' },
  { id: 8, title: 'utpote ascit amo', date: '18/07/2024 à 16:59:08', image: 'path_to_image_8' },
];

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredTickets = ticketsData.filter(ticket =>
      ticket.title.toLowerCase().includes(query.toLowerCase())
    );
    setTickets(filteredTickets);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home tickets={tickets} onSearch={handleSearch} />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ tickets, onSearch }) {
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <TicketList tickets={tickets} />
    </>
  );
}

export default App;
