import React from 'react';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, loading, ...props }) => {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {label}
    </button>
  );
};
