import React from 'react';
import { useParams } from 'react-router-dom';
import tales from '../data/tales.js';
import './TaleDetail.css';

const TaleDetail = () => {
  const { taleId } = useParams();  // Preuzimanje ID-ja priče iz URL-a
  const tale = tales.find(tale => tale.id === taleId);  // Pronađi priču koja odgovara ID-ju

  if (!tale) {
    return <div className="text-center text-light">Tale not found...</div>;  // Ako priča ne postoji
  }

  return (
    <div className="text-center text-light tale-detail-container">
      <h1>{tale.title}</h1>
      <p className="mt-4 fs-4">{tale.description}</p>

      <div className="p-4 bg-dark rounded border border-secondary shadow-lg mb-4">
        <h2>Full Tale</h2>
        <p>{tale.fullText}</p>  {/* Prikazivanje celokupnog sadržaja priče */}
      </div>
    </div>
  );
};

export default TaleDetail;
