
import React from 'react';
import './App.css';

function App() {
 


  return (
    <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
  );
}

export default App;
