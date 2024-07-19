import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LarkLogin from './components/LarkLogin';
import AuthCallback from './components/AuthCallback';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { UserProvider, UserContext } from './UserContext';
import './App.css';

const createBubble = (e) => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${e.clientX}px`;
  bubble.style.top = `${e.clientY}px`;
  document.body.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 4000);
};

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      createBubble(e);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement your search logic here
  };

  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar onSearch={handleSearch} />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LarkLogin />} />
        <Route path="/auth/callback" element={
          <UserContext.Consumer>
            {({ setUser }) => <AuthCallback setUser={setUser} />}
          </UserContext.Consumer>
        } />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
