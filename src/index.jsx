// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import your main component

// Find the root element in public/index.html
const container = document.getElementById('root'); 
const root = createRoot(container);

// Render the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);