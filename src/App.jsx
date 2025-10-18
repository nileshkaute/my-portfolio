import React from 'react';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      
    
     
    </>
  );
};

export default App;