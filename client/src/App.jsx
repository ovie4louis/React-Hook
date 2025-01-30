import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
  });

  const changeColor = () => {
    setCar((ovie) => {

      return {...ovie, color: "Blue", year: "2002"}

    })
  }
  

  
  return (
    <>

    <h1>My {car.brand}</h1>
    <h2>It is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={changeColor}>Blue</button>
    
    
    </>                                                                            
  )
}

export default App
