import React from 'react';
import Ticket from './ticket';

function TicketList({ tickets }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} id={ticket.id} title={ticket.titre} date={ticket.date} image={ticket.image} />
      ))}
    </div>
  );
}

export default TicketList;
