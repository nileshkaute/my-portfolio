import React from 'react';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
    <ReactLenis root />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      
    
     
    </>
  );
};

export default App;