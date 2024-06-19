import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <h1>Tickets MNS</h1>
      <div>
        <a href="#">Bareme</a>
        <Link to="/create-event">
          <button className="new-event-button">Créer nouvel événement</button>
        </Link>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
