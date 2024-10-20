import img from '../../assets/2.jpg';
import React from 'react';
import '../../App.css';

function Banana({ onCardClick }) {
  const cardData = {
    name: 'Banana Chip',
    price: '$0.50',
    colors: ['yellow'],
    imgSrc: img,
  };

  return (
    <div className="App">
      <article className="card__article" onClick={() => onCardClick(cardData)}>
        <img src={img} alt="Banana Chip" className="card__img" />
        <div className="card__data">
          <div className="colors">
            <span className="color yellow" />
          </div>
          <h2 className="card__title">Banana Chip</h2>
          <p className="card__price">$0.50</p>
        </div>
      </article>
    </div>
  );
}

export default Banana;
