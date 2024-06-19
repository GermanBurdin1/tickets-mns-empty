import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import TicketList from './ticketList';

const MainPage = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/evenements');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredTickets = tickets.filter(ticket =>
      ticket.titre.toLowerCase().includes(query.toLowerCase())
    );
    setTickets(filteredTickets);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <TicketList tickets={tickets} />
    </>
  );
};

export default MainPage;
