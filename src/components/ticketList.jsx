import React from 'react';
import Ticket from './Ticket';

const tickets = [
  { id: 1, title: 'claudeo placeat ta...', date: '19/06/2024 à 15:26:40', image: 'path_to_image_1' },
  { id: 2, title: 'zerahbk', date: '21/06/2024 à 17:39:51', image: 'path_to_image_2' },
  { id: 3, title: 'voluptate cedo suff...', date: '05/07/2024 à 10:38:36', image: 'path_to_image_3' },
  { id: 4, title: 'tubineus alveus tol...', date: '18/07/2024 à 16:59:08', image: 'path_to_image_4' },
  { id: 5, title: 'ambitus tantum pe...', date: '19/06/2024 à 15:26:40', image: 'path_to_image_5' },
  { id: 6, title: 'eveniet sollers deni...', date: '21/06/2024 à 17:39:51', image: 'path_to_image_6' },
  { id: 7, title: 'sponte commodo s...', date: '05/07/2024 à 10:38:36', image: 'path_to_image_7' },
  { id: 8, title: 'utpote ascit amo', date: '18/07/2024 à 16:59:08', image: 'path_to_image_8' },
];

function TicketList() {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} id={ticket.id} title={ticket.title} date={ticket.date} image={ticket.image} />
      ))}
    </div>
  );
}

export default TicketList;
