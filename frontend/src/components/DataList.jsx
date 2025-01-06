import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [ranking, setRanking] = useState([]); // Houdt het klassement bij
  const [loading, setLoading] = useState(true); // Laadstatus
  const [error, setError] = useState(null); // Foutmelding, indien aanwezig

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        console.log('Verstuur verzoek naar: http://localhost:5001/api/data');
        const response = await axios.get('http://localhost:5001/api/data'); // Ophalen van klassement
        console.log('Response ontvangen:', response.data);
        setRanking(response.data); // Klassement opslaan in state
      } catch (err) {
        console.error('Fout bij ophalen ranking:', err);
        setError('Fout bij het ophalen van het klassement.'); // Fout opslaan
      } finally {
        setLoading(false); // Zet laden op false
      }
    };

    fetchRanking(); // Ophalen klassement bij mount
  }, []);

  // Laadstatus
  if (loading) return <p>Gegevens worden geladen...</p>;

  // Foutmelding
  if (error) return <p>{error}</p>;

  // Weergave van het klassement
  return (
    <div>
      <h2>Wedstrijden en Scores</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Ploeg 1</th>
            <th>Ploeg 2</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((match, index) => (
            <tr key={index}>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;