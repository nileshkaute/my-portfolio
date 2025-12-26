import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Buttons.css';

const Button = ({ label = "Click", to, onClick, className = "", icon }) => {
  // Base style for the button
  const baseStyle = `relative rounded font-semibold overflow-hidden w-28 sm:w-32 md:w-36  lg:w-40 h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base flex items-center justify-center  text-black transition-all duration-300`;

  // Button content with optional icon
  const content = (
    <>
      {icon && <span className="mr-1 sm:mr-1.5 md:mr-2 text-sm sm:text-base">{icon}</span>}
      <span className="button-text relative z-10">{label}</span>
    </>
  );

  // Render Link if "to" prop exists
  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyle} water-btn ${className}`}
      >
        {content}
      </Link>
    );
  }

  // Render normal button
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} water-btn cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
