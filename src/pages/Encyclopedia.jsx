import React from 'react';
import { Link } from 'react-router-dom';
import './Encyclopedia.css';

const topics = [
  {
    title: 'Alchemy',
    description: 'An ancient practice of turning base metals into gold and seeking the elixir of life.'
  },
  {
    title: 'Kabbalah',
    description: 'The mystical interpretation of the Bible, revealing hidden meanings and divine patterns.'
  },
  {
    title: 'Theosophy',
    description: 'A blend of philosophy, religion, and science exploring divine wisdom.'
  },
  {
    title: 'Hermeticism',
    description: 'Ancient teachings attributed to Hermes Trismegistus about the divine and the cosmos.'
  }
];

const Encyclopedia = () => {
  return (
    <div className="encyclopedia-container text-light">
      <h1 className="text-center mb-5">The Encyclopedia of the Occult</h1>
      <div className="card-grid">
        {topics.map((topic, index) => (
          <Link
            to={`/encyclopedia/${topic.title.toLowerCase()}`}
            key={index}
            className="flip-card"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{topic.title}</h2>
              </div>
              <div className="flip-card-back">
                <p>{topic.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Encyclopedia;
