import React, { useState } from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Cart from './components/cart.js';
import Page from './components/page.js';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData); // Store the clicked card data
  };

  return (
    <div className="App">
      <Header />
      {selectedCard ? (
        <Page cardData={selectedCard} />
      ) : (
        <>
          <Main onCardClick={handleCardClick} />
          <Cart />
        </>
      )}
    </div>
  );
}

export default App;
