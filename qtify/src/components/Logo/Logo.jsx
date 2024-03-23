import React from 'react';
import logoImage from '../../assests/logo.png'; 

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="QTify Logo" />
    </div>
  );
};

export default Logo;