import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Apple() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color red"/>
                  </div>
                  <h2 className="card__title">Apple Slice</h2>
                  <p className="card__price">$1.30</p>
               </div>
            </article>
    </div>
  );
}

export default Apple;
