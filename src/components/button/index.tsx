import React from 'react';

export const Button: React.FC = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
