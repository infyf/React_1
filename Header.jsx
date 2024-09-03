import React from 'react';

const Header = ({ text }) => {
  return (
    <header style={{ backgroundColor: '#111111', padding: '10px', color: 'white' }}>
      <h1>{text}</h1>
    </header>
  );
};

export default Header;