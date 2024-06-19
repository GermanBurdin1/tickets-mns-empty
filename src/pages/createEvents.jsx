import React, { useState } from 'react';

function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description });
  };

  return (
    <div className="create-event">
      <h2>Créer Nouvel Événement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
}

export default CreateEvent;
