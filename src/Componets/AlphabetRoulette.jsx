// AlphabetRoulette.jsx
import React, { useState } from 'react';
import './AlphabetRoulette.css';

function AlphabetRoulette() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [selectedLetters, setSelectedLetters] = useState([]);

  const handleLetterClick = (letter) => {
    setSelectedLetters(prevSelectedLetters =>
      prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter(l => l !== letter)
        : [...prevSelectedLetters, letter]
    );
  };

  const resetRoulette = () => {
    setSelectedLetters([]);
  };

  return (
    <div className="roulette-container">
      <div className="roulette">
        {letters.map((letter, index) => (
          <div
            key={letter}
            className={`letter ${selectedLetters.includes(letter) ? 'selected' : ''}`}
            style={{
              transform: `
                rotate(${(360 / letters.length) * index}deg)
                translate(0, -150px)
                rotate(-${(360 / letters.length) * index}deg)
              `
            }}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
        {/* Texto "Pasapalabras" centrado en el círculo */}
        <div className="center-text">Pasapalabras</div>
      </div>
    </div>
  );
}

export default AlphabetRoulette;
