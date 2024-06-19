import React, { useState } from 'react';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('Chargement...');

    try {
      const response = await fetch('/api/evenements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titre: title, description }),
      });

      if (response.ok) {
        setTimeout(() => {
          setStatusMessage('Événement créé avec succès');
          setLoading(false);
        }, 2000); 
      } else {
        const errorData = await response.json();
        setStatusMessage(`Erreur: ${errorData.message}`);
        setLoading(false);
      }
    } catch (error) {
      setStatusMessage('Erreur de connexion');
      setLoading(false);
    }
  };

  return (
    <div className="create-event">
      <h2>Créer Nouvel Événement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          Créer
        </button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default CreateEvent;
