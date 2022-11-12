import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import '../src/fonts/alfont_com_AlFont_com_AraAlBayan-Bold.otf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>
);

