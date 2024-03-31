import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';

import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="img-inital">
        <div className="container p-4">
          <Routes>
            <Route path='/' Component={Dashboard} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
