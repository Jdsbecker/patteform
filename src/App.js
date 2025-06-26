import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Actualites from './pages/Actualites';
import AdminPanel from './pages/AdminPanel';
import Adoption from './pages/Adoption';
import Agir from './pages/Agir';
import Association from './pages/Association';
import Contact from './pages/Contact';
import Don from './pages/Don';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import MentionsLegales from './pages/MentionsLegales';
import Partenaires from './pages/Partenaires';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/agir" element={<Agir />} />
          <Route path="/association" element={<Association />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/don" element={<Don />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/partenaires" element={<Partenaires />} />
        </Routes>
      </div>
    </Router>
  );
}
