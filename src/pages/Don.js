// src/pages/Don.js
import React, { useState } from 'react';

export default function Don() {
  const [donation, setDonation] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const handleChange = (e) => {
    setDonation({...donation, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci beaucoup, ${donation.name}, pour votre don de ${donation.amount}€ !`);
    // Add logic to handle donation processing
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Faire un don</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label><br />
          <input type="text" name="name" value={donation.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={donation.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Montant (€):</label><br />
          <input type="number" name="amount" value={donation.amount} onChange={handleChange} required min="1" />
        </div>
        <div>
          <label>Message (optionnel):</label><br />
          <textarea name="message" value={donation.message} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Envoyer</button>
      </form>
    </main>
  );
}
