import React from 'react';
import imagen5 from '../assets/imagen5.jpg';

const About = () => {
  return (
    <section id="quienes-somos" className="main-content">
      <div className="centered2">
        <h2>Quienes somos</h2>
        <p className="mi-parrafo-con-sangria">
          Prendas y accesorios inspirados en el Bogolan. Este es un tejido de
          algodón maliense hecho a mano tradicionalmente teñido con barro
          fermentado. Ocupa un lugar importante en la cultura tradicional del
          pueblo y, más recientemente, se ha convertido en un símbolo de la
          identidad cultural maliense. Nuestro lugar de trabajo se encuentra del
          otro lado del Atlántico, en Chapalmadal.
        </p>
        <img src={imagen5} alt="Imagen 5" className="image-quienes-somos" />
      </div>
    </section>
  );
};

export default About;
