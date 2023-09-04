import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { EntryContextProvider } from './context/EntryContext'
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EntryContextProvider>
        <Router>
          <App />
        </Router>
      </EntryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
