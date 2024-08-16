import React from 'react';
import './App.css';
import Service from './service'; 

function App() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Advice of the day</h1>
      <Service />
      <div className="reload">
        <button onClick={handleReload} className="reload-button">Reload the page for more advice</button>
      </div>
    </div>
  );
}

export default App;
