
import React, { useEffect } from 'react';
import '../App.css';
import Whale from './cards/whale.js';
import Mushroom from './cards/mush.js';
import Capybara from './cards/capybara.js';
import Bracelet from './cards/bracelet.js';
import Shrimp from './cards/shrimp.js';
import Blob from './cards/rock.js';
import Glove from './cards/glove.js';
import Tophat from './cards/hat.js';
import Cape from './cards/cape.js';
import Sombrero from './cards/sombrero.js';
import Apple from './cards/apple.js';
import Watermelon from './cards/watermelon.js';
import Kiwi from './cards/kiwi.js';
import Pear from './cards/pear.js';
import Banana from './cards/banana.js';
import Pineapple from './cards/pineapple.js';
import Orange from './cards/orange.js';

function Main({ onCardClick }) {
  useEffect(() => {
    const containers = document.querySelectorAll('.card__container');

    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.currentTarget.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    containers.forEach((container) => {
      container.addEventListener('wheel', handleWheel);
    });

    return () => {
      containers.forEach((container) => {
        container.removeEventListener('wheel', handleWheel);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3>Animals</h3>
        <div className="card__container">
          <Whale onCardClick={onCardClick} />
          <Mushroom onCardClick={onCardClick} />
          <Capybara onCardClick={onCardClick} />
          <Shrimp onCardClick={onCardClick} />
          <Blob onCardClick={onCardClick} />
          <Glove onCardClick={onCardClick} />
        </div>

        <h3>Items</h3>
        <div className="card__container">
          <Bracelet onCardClick={onCardClick} />
          <Blob onCardClick={onCardClick} />
          <Glove onCardClick={onCardClick} />
        </div>

        <h3>Accessories</h3>
        <div className="card__container">
          <Sombrero onCardClick={onCardClick} />
          <Tophat onCardClick={onCardClick} />
          <Cape onCardClick={onCardClick} />
        </div>

        <h3>Fruits</h3>
        <div className="card__container">
          <Kiwi onCardClick={onCardClick} />
          <Watermelon onCardClick={onCardClick} />
          <Apple onCardClick={onCardClick} />
          <Orange onCardClick={onCardClick} />
          <Pear onCardClick={onCardClick} />
          <Banana onCardClick={onCardClick} />
          <Pineapple onCardClick={onCardClick} />
        </div>
      </div>
    </div>
  );
}

export default Main;
