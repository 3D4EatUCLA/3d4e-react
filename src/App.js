// dependencies
import React from 'react'

// components
import NavBar from './components/NavBar'
import RouterMap from './components/RouterMap'

// includes
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterMap />
      {/*
      <h1 className="fonts">Creating new React App</h1>
      <h2>Did it change?</h2>
      */}
    </div>
  );
}

export default App