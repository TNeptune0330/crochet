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

function Main() {
  useEffect(() => {
    const containers = document.querySelectorAll('.card__container');
    
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.currentTarget.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    containers.forEach(container => {
      container.addEventListener('wheel', handleWheel);
    });

    return () => {
      containers.forEach(container => {
        container.removeEventListener('wheel', handleWheel);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h3>Animals</h3>
        <div className="card__container">
          <Whale />
          <Mushroom />
          <Capybara />
          <Shrimp />
          <Whale />
          <Blob />
          <Glove />
          <Blob />
          
        </div>
        <h3>Items</h3>
        <div className="card__container">
          <Blob />
          <Glove />
          <Mushroom />
          <Bracelet />
        </div>
        <h3>Accesories</h3>
        <div className="card__container">
            <Sombrero />
            <Tophat />
            <Cape />
        </div>
      </div>
    </div>
  );
}

export default Main;
