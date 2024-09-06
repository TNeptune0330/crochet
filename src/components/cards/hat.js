import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Tophat() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color black"/>
                  </div>
                  <h2 className="card__title">Top hat</h2>
                  <p className="card__price">$1.00</p>
               </div>
            </article>
    </div>
  );
}

export default Tophat;
