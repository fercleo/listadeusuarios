// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './UserListApp'; // Supondo que você tenha um componente App
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
