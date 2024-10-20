import React, { useState } from 'react';

const YourComponent = () => {
  // Initialize state
  const [cartList, setCartList] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  // Function to add currentItem to cartList
  const addToCart = () => {
    if (currentItem) {
      setCartList(prevCartList => [...prevCartList, currentItem]);
      setCurrentItem(''); // Clear the input after adding
    }
  };

  return (
    <div>
      {/* Button to trigger addToCart */}
      <button onClick={addToCart}>Add to Cart</button>

      {/* Display cartList */}
      <ul>
        {cartList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
