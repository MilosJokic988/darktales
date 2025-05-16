import React from 'react';
import './Home.css'; // I dalje koristiš pozadinu

const Home = () => {
  return (
    <div className="home-background text-center text-light">
      <h1>Welcome to Dark Tales</h1>
      <p className="mt-4 fs-4">Explore the shadows, symbols, and secrets...</p>
    </div>
  );
};

export default Home;