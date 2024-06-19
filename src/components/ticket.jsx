import React from 'react';
import { Link } from 'react-router-dom';

function Ticket({ title, date, image, id }) {
  return (
    <div className="ticket">
      <Link to={`/event/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{date}</p>
    </div>
  );
}

export default Ticket;
