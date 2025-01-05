import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/data', formData);
      alert('Data succesvol verzonden!');
      setFormData({ name: '', email: '', message: '' }); // Reset het formulier
    } catch (error) {
      console.error('Error tijdens het verzenden:', error);
      alert('Fout bij het verzenden van data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Naam:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Bericht:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Verzenden</button>
    </form>
  );
};

export default Form;
