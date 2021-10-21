import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoposServiceProvider } from './services/goposService/GoposServiceProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GoposServiceProvider>
        <App />
      </GoposServiceProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
