import React from 'react';
import './App.css';
import Latency from './Latency';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Packet Latency</h1>
        <div className="latency-container">
          <Latency />
        </div>
      </div>
      {/* Other components and content */}
    </div>
  );
}

export default App;
