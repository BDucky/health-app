import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  backgroundColor, 
  onClick,
  style = {} 
}) => {
  const cardStyle = {
    backgroundColor,
    ...style
  };

  return (
    <div 
      className={`card ${className}`} 
      style={cardStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
