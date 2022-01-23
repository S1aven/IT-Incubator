import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";


function App() {
  console.log('App rendering');
  return (
    <div className="App">
      <Accordion/>
      <Rating/>
    </div>
  );
}

export default App;
