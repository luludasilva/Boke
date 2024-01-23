import React from 'react';
import Mochilas from '../assets/Mochilas.jpg';
import Buzos from '../assets/Buzos.jpg';
import Remerones from '../assets/Remerones.jpg';
import Remeron from '../assets/Remeron.jpg';
import Camperas from '../assets/Camperas.jpg';
import Pilusos from '../assets/Pilusos.jpg';

const Cards = () => {
  return (
    <section id="articulos" className="main-content">
      {/* Dentro de la sección de Artículos */}
      <div className="centered">
        <h2>Artículos</h2>
        <div className="container">
          <div className="item">
            <img src={Mochilas} alt="Mochilas" className="item-img" />
            <p>Mochilas de tela</p>
          </div>
          <div className="item">
            <img src={Buzos} alt="Buzos" className="item-img" />
            <p>Buzos</p>
          </div>
          <div className="item">
            <img src={Remerones} alt="Remerones" className="item-img" />
            <p>Remerones</p>
          </div>
          <div className="item">
            <img src={Remeron} alt="Remeron" className="item-img" />
            <p>Remerón vestido</p>
          </div>
          <div className="item">
            <img src={Camperas} alt="Camperas con Capuchas" className="item-img" />
            <p>Camperas</p>
          </div>
          <div className="item">
            <img src={Pilusos} alt="Pilusos" className="item-img" />
            <p>Pilusos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
