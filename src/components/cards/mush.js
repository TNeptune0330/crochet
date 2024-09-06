import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Mushroom() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color red"/>
                    <span className="color orange"/>
                    <span className="color yellow"/>
                    <span className="color green"/>
                    <span className='color cyan'/>
                    <span className="color blue"/>
                    <span className="color pink"/>
                    <span className="more">...</span>
                  </div>
                  <h2 className="card__title">Popping Shroom</h2>
                  <p className="card__price">$3.00</p>
               </div>
            </article>
    </div>
  );
}

export default Mushroom;
