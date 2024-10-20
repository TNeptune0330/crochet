import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Orange() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color orange"/>
                  </div>
                  <h2 className="card__title">Piece of Orange</h2>
                  <p className="card__price">$1.30</p>
               </div>
            </article>
    </div>
  );
}

export default Orange;
