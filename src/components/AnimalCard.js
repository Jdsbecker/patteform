import React from 'react';

export default function AnimalCard({ animal }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      maxWidth: '300px',
      margin: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img
        src={animal.images?.[0] || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={animal.name}
        style={{ width: '100%', borderRadius: '6px' }}
      />
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
      {animal.sos && <span style={{ color: 'red', fontWeight: 'bold' }}>SOS Urgent</span>}
    </div>
  );
}