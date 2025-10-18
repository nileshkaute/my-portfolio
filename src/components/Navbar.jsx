import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import resume from '../assets/images/resume.pdf';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf'; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-black text-gray-400 h-12 sm:h-14 md:h-16 lg:h-18 flex items-center px-2 sm:px-3 md:px-4 lg:px-6 relative">
      <div className="border border-white rounded-full w-7 h-5 sm:w-8 sm:h-6 md:w-10 md:h-7 lg:w-12 lg:h-8 text-center flex items-center justify-center ml-1 sm:ml-1.5 md:ml-2 lg:ml-3">
        <i className="text-xs sm:text-xs md:text-sm lg:text-base">NK</i>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="ml-auto mr-2 lg:hidden text-xl sm:text-2xl md:text-3xl z-50 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex underline justify-center gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 w-full text-sm lg:text-base xl:text-xl 2xl:text-2xl tracking-wide ml-6 lg:ml-8 xl:ml-12 2xl:ml-16">
        <li className="hover:text-gray-300 transition-colors duration-200"><Link to="/">Home</Link></li>
        <li className="hover:text-gray-300 transition-colors duration-200"><Link to="#about">About</Link></li>
        <li className="hover:text-gray-300 transition-colors duration-200"><Link to="#skills">Skills</Link></li>
        <li className="hover:text-gray-300 transition-colors duration-200"><Link to="#projects">Projects</Link></li>
        <li className="hover:text-gray-300 transition-colors duration-200"><Link to="#contact">Contact</Link></li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <Button 
          label="Resume" 
          icon="📄" 
          onClick={handleResumeDownload}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 sm:top-14 md:top-16 left-0 right-0 bg-black z-40 lg:hidden border-t border-gray-800 shadow-lg">
          <ul className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl">
            <li className="hover:text-gray-300 transition-colors duration-200">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200">
              <Link to="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200">
              <Link to="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200">
              <Link to="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-200">
              <Link to="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
            <li className="mt-2 sm:mt-3 md:mt-4 ">
              <Button
                label="Resume"
                icon="📄"
                
                onClick={() => {
                  handleResumeDownload();
                  setIsMenuOpen(false);
                }}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;