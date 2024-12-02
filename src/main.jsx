import React from 'react';
import ReactDOM from 'react-dom/client';
import { RevealBento } from './Components/RevealBento';  // if it's inside a components folder
import './index.css'; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RevealBento />
   </React.StrictMode>
);
