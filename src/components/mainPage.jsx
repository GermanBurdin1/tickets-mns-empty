import React, { useState } from 'react';
import SearchBar from './searchBar';
import TicketList from './ticketList';

const ticketsData = [
  { id: 1, title: 'claudeo placeat ta...', date: '19/06/2024 à 15:26:40', image: 'path_to_image_1' },
  { id: 2, title: 'zerahbk', date: '21/06/2024 à 17:39:51', image: 'path_to_image_2' },
  // Добавьте остальные данные
];

const MainPage = () => {
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
    <>
      <SearchBar onSearch={handleSearch} />
      <TicketList tickets={tickets} />
    </>
  );
};

export default MainPage;
