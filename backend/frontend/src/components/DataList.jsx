import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/data'); // Je backend API endpoint
        setData(response.data); // Stel de opgehaalde data in
      } catch (err) {
        setError('Fout bij het ophalen van data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false); // Stop de laadstatus
      }
    };

    fetchData();
  }, []); // Alleen uitvoeren bij de eerste render

  if (loading) return <p>Gegevens worden geladen...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Opgeslagen Gegevens</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong>: {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
