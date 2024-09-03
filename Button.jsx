import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',borderRadius: '11px' }}>
      {label}
    </button>
  );
};

export default Button;