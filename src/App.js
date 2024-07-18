import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LarkLogin from './components/LarkLogin';
import AuthCallback from './components/AuthCallback';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LarkLogin />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
