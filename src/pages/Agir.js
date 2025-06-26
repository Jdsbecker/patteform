import React, { useState } from 'react';

export default function Agir() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name} pour votre volonté d'aider!`);
    // Here, you would add backend logic to send/store the form data
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Devenir bénévole</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Envoyer</button>
      </form>
    </main>
  );
}