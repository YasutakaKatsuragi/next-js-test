// src/pages/index.js
import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Button color="#e74c3c" onClick={() => alert('Red button clicked!')}>
        Red Button
      </Button>
      <Button color="#2ecc71" onClick={() => alert('Green button clicked!')}>
        Green Button
      </Button>
    </div>
  );
};

export default Home;