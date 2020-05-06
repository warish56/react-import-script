# react-import-script

## Why?
##### It helps to import scripts from url in a react component when the script is need to be used, hence saving the project startup time rather than loading all the scripts at once.

## Installation
`npm i react-import-script`

`yarn add react-import-script`

## Usage

#### 1. ImportScript

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImportScript from 'react-import-script';

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

```

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `url`     | url of any script which needs to be loaded | `true` |