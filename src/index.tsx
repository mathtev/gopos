import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GoposServiceProvider } from './services/goposService/GoposServiceProvider';


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
