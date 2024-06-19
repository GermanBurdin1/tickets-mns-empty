import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`/api/evenements/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetail;
