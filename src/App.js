import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';
import Formulario from './componentes/Formulario';

function App() {

  const saludo =
    <>
      <h1>¡Hola mundo!</h1>
      <h2>¡Te saludo desde el planeta Marte!</h2>
    </>
  ;
  const elemento = 
    <ul>
      <li>Uno</li>
      <li>Dos</li>
      <li>Tres</li>
      <li>Cuatro</li>
      <li>Cinco</li>
    </ul>
  ;
  const parrafo = 
    <p 
      className="prueba" 
      id="prueba"
    >
      Esto es un segundo párrafo de prueba
    </p>
  ;

  return (
    <div className="App">
      <header className="App-header">
        {saludo}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p
          className="prueba"
          id="prueba"
        >
          Esto es un párrafo de prueba.
        </p>
        {parrafo}
        {elemento}
        
        //Llamamos el componente Formulario que hemos creado
        <Formulario />
      </header>
    </div>
  );
}

export default App;
