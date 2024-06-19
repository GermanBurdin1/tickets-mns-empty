import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function Ticket({ title, date, image, id }) {
  return (
    <div className="ticket">
      <Link to={`/event/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{formatDate(date)}</p>
    </div>
  );
}
export default Ticket;
