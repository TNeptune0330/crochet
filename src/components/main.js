import React, { useEffect } from 'react';
import '../App.css';
import Whale from './cards/whale.js';
import Mushroom from './cards/mush.js';
import Capybara from './cards/capybara.js';
import Bracelet from './cards/bracelet.js';
import Shrimp from './cards/shrimp.js';
import Blob from './cards/rock.js';
import Glove from './cards/glove.js';

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
          <Bracelet />
          <Shrimp />
          <Blob />
          <Glove />
        </div>
        <div className="card__container">
          <Whale />
          <Mushroom />
          <Capybara />
          <Bracelet />
        </div>
      </div>
    </div>
  );
}

export default Main;
