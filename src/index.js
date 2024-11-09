import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que este archivo exista
import Login from './App'; // Asegúrate de que App.js exporte el componente Login

const root = ReactDOM.createRoot(document.getElementById('root')); // Asegúrate de que el elemento con id 'root' exista en index.html
root.render(
  <React.StrictMode>
    <Login /> 
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu aplicación, pasa una función para registrar los resultados
