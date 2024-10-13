import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Assuming the CSS file is located here

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="home-button" onClick={() => navigate('/login')}>
        Login
      </button>
      <button className="home-button" onClick={() => navigate('./Signup')}>
        Sign Up
      </button>
    </div>
  );
};

export default Home;
