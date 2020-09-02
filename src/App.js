import React from 'react';
import profileImage from "./img/3d4elogo.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Creating new React App</h1>
      <h2>Let's hope this works</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
