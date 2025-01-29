import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [brand, setBrand] = useState("Ferrari");
  const [model, setModel] = useState("Roma");
  const [year, setYear] = useState("2023");
  const [color, setColor] = useState("red");

  
  return (
    <>

    <h1>My {brand}</h1>
    <h2>It is a {color} {model} from {year}</h2>
    
    
    </>                                                                            
  )
}

export default App
