import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';

export default function AddAnimalForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [sos, setSos] = useState(false);
  const [fad, setFad] = useState(false);
  const [babyFriendly, setBabyFriendly] = useState(false);
  const [catFriendly, setCatFriendly] = useState(false);
  const [dogFriendly, setDogFriendly] = useState(false);
  const [otherFriendly, setOtherFriendly] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Veuillez saisir un nom');
      return;
    }

    const newAnimal = {
      name,
      description,
      images: images.split(',').map(url => url.trim()).filter(url => url),
      sos,
      fad,
      babyFriendly,
      catFriendly,
      dogFriendly,
      otherFriendly,
      createdAt: Date.now(),
    };

    try {
      const animalsRef = ref(database, 'animals');
      await push(animalsRef, newAnimal);
      setStatusMessage('Animal ajouté avec succès !');

      // Reset form
      setName('');
      setDescription('');
      setImages('');
      setSos(false);
      setFad(false);
      setBabyFriendly(false);
      setCatFriendly(false);
      setDogFriendly(false);
      setOtherFriendly(false);
    } catch (error) {
      setStatusMessage('Erreur lors de l\'ajout de l\'animal.');
      console.error('Firebase push error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '20px auto' }}>
      <label>
        Nom:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Images (URLs, séparées par des virgules) :
        <input type="text" value={images} onChange={e => setImages(e.target.value)} />
      </label>
      <br />
      <label>
        SOS Urgent:
        <input type="checkbox" checked={sos} onChange={e => setSos(e.target.checked)} />
      </label>
      <br />
      <label>
        FAD (Famille d'Accueil Domicile):
        <input type="checkbox" checked={fad} onChange={e => setFad(e.target.checked)} />
      </label>
      <br />
      <label>
        Adapté aux bébés:
        <input type="checkbox" checked={babyFriendly} onChange={e => setBabyFriendly(e.target.checked)} />
      </label>
      <br />
      <label>
        Compatible avec chats:
        <input type="checkbox" checked={catFriendly} onChange={e => setCatFriendly(e.target.checked)} />
      </label>
      <br />
      <label>
        Compatible avec chiens:
        <input type="checkbox" checked={dogFriendly} onChange={e => setDogFriendly(e.target.checked)} />
      </label>
      <br />
      <label>
        Compatible avec autres animaux:
        <input type="checkbox" checked={otherFriendly} onChange={e => setOtherFriendly(e.target.checked)} />
      </label>
      <br />
      <button type="submit" style={{ marginTop: 10 }}>Ajouter l'animal</button>
      <p>{statusMessage}</p>
    </form>
  );
}