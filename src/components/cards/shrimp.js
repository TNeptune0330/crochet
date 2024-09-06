import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Shrimp() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color red"/>                 
                    <span className="color pink"/>
                  </div>
                  <h2 className="card__title">Shrimp</h2>
                  <p className="card__price">$4.50</p>
               </div>
            </article>
    </div>
  );
}

export default Shrimp;
