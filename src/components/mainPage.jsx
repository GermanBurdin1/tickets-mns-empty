import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import TicketList from './ticketList';

const MainPage = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/evenements');
        const data = await response.json();
        setAllTickets(data);
        setFilteredTickets(data); 
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredTickets(allTickets); 
    } else {
      const filtered = allTickets.filter(ticket =>
        ticket.titre.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTickets(filtered);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <TicketList tickets={filteredTickets} />
    </>
  );
};

export default MainPage;
