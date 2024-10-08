import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/styles.css';
import Header from './components/Header/index'
import Footer from './components/Footer';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


