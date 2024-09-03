import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px' }}>
      <h2>{title}</h2>
      <img 
        src="https://tlgrm.ru/_/stickers/170/2fc/1702fccf-f12a-4a27-9bfa-23714e9bdae2/3.jpg" 
        alt="Card image" 
        style={{ width: '20%', height: '20%', borderRadius: '8px' }} 
      />
      <p>{content}</p>
    </div>
  );
};

export default Card;