import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-2 ${className}`} {...props}>
    {children}
  </div>
);