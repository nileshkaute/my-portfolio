// ...existing code...
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
// ...existing code...
// removed: import resume from '../assets/images/NileshKauteResume.pdf';

const Navbar = () => {
  const [isMoved, setIsMoved] = useState(false);

  // ...existing code...
  const handleResumeDownload = () => {
    // Serve resume from public/ to avoid bundler resolution errors on Vercel
    const url = '/NileshkauteResume.pdf'; // place the PDF at public/NileshKauteResume.pdf
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  // ...existing code...

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={
        isMoved
          ? {
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              scale: 1,
              opacity: 1,
              borderRadius: '10%',
              width: 220,
              height: 220,
              position: 'fixed',
            }
          : {
              left: 'auto',
              translateX: 0,
              translateY: 0,
              scale: 1,
              opacity: 1,
              position: 'fixed',
              top: '2.5rem',
              right: '2.5rem',
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
            }
      }
      transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', stiffness: 90, damping: 14 }}
      className="bg-white text-black cursor-pointer shadow-lg z-50 flex items-center justify-center"
      onClick={() => setIsMoved(!isMoved)}
    >
      {isMoved ? (
        <div
          className="absolute top-2 right-2 text-white rounded-2xl text-xl cursor-pointer bg-black"
          onClick={(e) => {
            e.stopPropagation();
            setIsMoved(false);
          }}
        >
          <X />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-black p-1 text-2xl">
          <Menu />
        </div>
      )}

      {isMoved && (
        <div className="flex flex-col items-center justify-center gap-3 mt-8 text-black text-sm">
          <Link to="/#home" className="hover:underline" onClick={() => setIsMoved(false)}>
            Home
          </Link>
          <Link to="/#about" className="hover:underline" onClick={() => setIsMoved(false)}>
            About
          </Link>
          <Link to="/#skills" className="hover:underline" onClick={() => setIsMoved(false)}>
            Skills
          </Link>
          <Link to="/#projects" className="hover:underline" onClick={() => setIsMoved(false)}>
            Projects
          </Link>
          <Link to="/#contact" className="hover:underline" onClick={() => setIsMoved(false)}>
            Contact
          </Link>
          <div className="mt-2">
            <Button label="Resume" icon="📄" onClick={() => { handleResumeDownload(); setIsMoved(false); }} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
// ...existing code...