import React from 'react';
import './Symbols.css';

const Symbols = () => {
  return (
    <div className="symbols-background text-center text-light">
      <h1>Symbols of Mysticism</h1>
      <div className="symbols-gallery">
        {/* Simboli bez slika, koristeći ikone ili tekst */}
        <div className="symbol-card">
          <h2>Alchemy Symbol</h2>
          <div className="symbol-icon alchemy-symbol">&#x2691;</div> {/* Alhemijski simbol */}
        </div>

        <div className="symbol-card">
          <h2>Eye of Providence</h2>
          <div className="symbol-icon eye-of-providence">&#x1F441;</div> {/* Oko providnosti */}
        </div>

        <div className="symbol-card">
          <h2>Inverted Pentagram</h2>
          <div className="symbol-icon inverted-pentagram">&#x2B05;</div> {/* Obrnuti pentagram (Može biti stilizovano pomoću CSS-a) */}
        </div>

        <div className="symbol-card">
          <h2>Ouroboros</h2>
          <div className="symbol-icon ouroboros">&#x26E7;</div> {/* Ouroboros simbol */}
        </div>

        <div className="symbol-card">
          <h2>Ankh</h2>
          <div className="symbol-icon ankh">&#x2625;</div> {/* Ankh simbol */}
        </div>

        <div className="symbol-card">
          <h2>Seal of Solomon</h2>
          <div className="symbol-icon seal-of-solomon">&#x2B50;</div> {/* Pečat Solomona */}
        </div>
      </div>
    </div>
  );
};

export default Symbols;
