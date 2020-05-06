import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImportScript from './Components/Scripts';

function App() {
  return (
    <div className="App">
      <ImportScript url="https://checkout.razorpay.com/v1/checkout.js">
        <p>Hello world</p>
      </ImportScript>
    
    </div>
  );
}

export default App;
