import React from'react';
import '../App.css';
import ContactForm from './contactform';
import YourComponent from './addItem';

function Cart() {
  return (
    <div className="cart">
      <h1 className='cart-title'>Cart</h1>
      <ContactForm />
      <div className="cart-display"></div>
    </div>
  );
}

export default Cart;
