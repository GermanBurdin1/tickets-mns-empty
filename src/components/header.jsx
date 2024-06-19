import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Tickets MNS</h1>
      <a href="#">Bareme</a>
      <Link to="/create-event">
        <button className="new-event-button">Créer nouvel événement</button>
      </Link>
    </header>
  );
}

export default Header;
