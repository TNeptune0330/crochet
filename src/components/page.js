import React from 'react';
import '../App.css';
import YourComponent from './addItem';

function Page({ cardData }) {
  const { name, price, colors, imgSrc } = cardData;

  return (
    <div className="page">
      <h1>{name}</h1>
      <img src={imgSrc} alt={name} />
      <p>Price: {price}</p>
      <p>Colors: {colors.join(', ')}</p>
      <YourComponent />
    </div>
  );
}

export default Page;
