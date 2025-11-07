import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;