import React from 'react';
import { Link } from 'react-router-dom';
import tales from '../data/tales.js';
import './DarkTales.css';

const DarkTales = () => {
  return (
    <div className="darktales-background">
      <div className="dark-tales-container">
        <h1 className="section-title">Mračne Priče</h1>
        <div className="tales-grid">
          {tales.map(tale => (
            <Link to={`/dark-tales/${tale.id}`} key={tale.id} className="tale-card">
              <h3>{tale.title}</h3>
              <p>{tale.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkTales;
