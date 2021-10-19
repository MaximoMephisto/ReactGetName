import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';
import Formulario from './componentes/Formulario';
import Navbar from './componentes/Navbar';
import Carta from './componentes/Carta';

function App() {

  const headerContent =
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 my-5 text-center d-flex justify-content-center">
            <h1>
              Welcome to creator card
            </h1>
          </div>
          <div className="col-12 col-sm-12">
            <h5>
              Create your letter easily
            </h5>
          </div>
          <div className="col-12 col-sm-12">
            <h5>
              With millions of options to configure your layout
            </h5>
          </div>
        </div>
      </div>
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
      <Navbar />
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 my-5">
              {headerContent}
            </div>
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 mt-5">
              <Formulario />
            </div>
            <div className="col-12 col-sm-6 mt-5">
              <Carta />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
