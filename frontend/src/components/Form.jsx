import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({ team1: '', team2: '', score: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/data', formData);
      setMessage('Wedstrijd succesvol toegevoegd!');
      setFormData({ team1: '', team2: '', score: '' }); // Reset het formulier
    } catch (error) {
      console.error('Error tijdens het verzenden:', error);
      setMessage('Fout bij het toevoegen van de wedstrijd.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Voeg een nieuwe wedstrijd toe</h2>
      <div>
        <label>Ploeg 1:</label>
        <input
          type="text"
          name="team1"
          value={formData.team1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ploeg 2:</label>
        <input
          type="text"
          name="team2"
          value={formData.team2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Score (1-5):</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          required
          min="1"
          max="5"
        />
      </div>
      <button type="submit">Toevoegen</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;