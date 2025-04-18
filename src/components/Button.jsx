// src/components/Button.jsx
import React from 'react';

export const Button = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles = "px-4 py-2 rounded font-medium";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  
  const className = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;
  
  return (
    <button 
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};