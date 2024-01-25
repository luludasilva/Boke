import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="main-content text-center"> 
      <div className="centered">
        <h2 className="contact-heading">Contacto</h2> 
        <p>
          ¡Contáctanos para descubrir más sobre nuestro trabajo! Estamos aquí
          para responder a todas tus preguntas y ayudarte en tu búsqueda.
        </p>
        <div className="flex rounded-full bg-amber-900 ">
          <a href="https://www.instagram.com/boke.estilo.africano/?hl=es">
            <FaInstagram size={35} className="instagram-icon" /> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

