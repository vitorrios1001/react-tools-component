import React from 'react';

export interface ButtonProps {
  label: string;
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

