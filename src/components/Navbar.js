import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = { margin: '0 15px', textDecoration: 'none', color: '#333' };
  const activeStyle = { fontWeight: 'bold', color: '#007BFF' };

  return (
    <nav style={{ padding: '15px 30px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      <NavLink to="/" style={linkStyle} end activeStyle={activeStyle}>
        Accueil
      </NavLink>
      <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>
        À propos
      </NavLink>
      <NavLink to="/actualites" style={linkStyle} activeStyle={activeStyle}>
        Actualités
      </NavLink>
      <NavLink to="/adoption" style={linkStyle} activeStyle={activeStyle}>
        Adoption
      </NavLink>
      <NavLink to="/agir" style={linkStyle} activeStyle={activeStyle}>
        Agir
      </NavLink>
      <NavLink to="/don" style={linkStyle} activeStyle={activeStyle}>
        Faire un don
      </NavLink>
      <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>
        Contact
      </NavLink>
      <NavLink to="/faq" style={linkStyle} activeStyle={activeStyle}>
        FAQ
      </NavLink>
      <NavLink to="/association" style={linkStyle} activeStyle={activeStyle}>
        Association
      </NavLink>
      <NavLink to="/partenaires" style={linkStyle} activeStyle={activeStyle}>
        Partenaires
      </NavLink>
      <NavLink to="/mentionslegales" style={linkStyle} activeStyle={activeStyle}>
        Mentions Légales
      </NavLink>
      <NavLink to="/login" style={linkStyle} activeStyle={activeStyle}>
        Admin
      </NavLink>
      <NavLink to="/adminpanel" style={linkStyle} activeStyle={activeStyle}>
        Dashboard
      </NavLink>
    </nav>
  );
}
