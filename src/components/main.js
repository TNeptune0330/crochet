import React from'react';
import '../App.css';
import Whale from './cards/whale.js'
import Mushroom from './cards/mush.js';
import Capybara from './cards/capybara.js';
import Bracelet from './cards/bracelet.js';
import Shrimp from './cards/shrimp.js';
import Blob from './cards/rock.js';
import Glove from './cards/glove.js';

function Main() {
  return (
    <div className="App">
        <div className="container">
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
