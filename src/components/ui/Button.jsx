import React from 'react';

export const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg ${className}`}
    {...props}
  >
    {children}
  </button>
);