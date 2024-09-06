import img from '../../assets/2.jpg'
import React from'react';
import '../../App.css';

function Capybara() {
  return (
    <div className="App">
        <article className="card__article">
               <img src={img} alt="item" className="card__img"/>

               <div className="card__data">
                  <div className='colors'>
                    <span className="color brown"/>
                    <span className="color tan"/>
                    <span className="color yellow"/>
                    <span className="color white"/>
                  </div>
                  <h2 className="card__title">Capybara</h2>
                  <p className="card__price">$4.00</p>
               </div>
            </article>
    </div>
  );
}

export default Capybara;
