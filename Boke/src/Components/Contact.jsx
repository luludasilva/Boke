import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contacto" className="main-content">
      <div className="centered">
        <h2>Contacto</h2>
        <p>
          ¡Contáctanos para descubrir más sobre nuestro trabajo! Estamos aquí
          para responder a todas tus preguntas y ayudarte en tu búsqueda.
        </p>
        <div className="flex">
              <a href="https://www.instagram.com/boke.estilo.africano/?hl=es">
                <FaInstagram className="text-[35px] rounded-full " /> Instagram
              </a>
              <a href="https://wa.me/5492235928978">
                <FaWhatsapp className="text-[35px] rounded-full " /> Whatsapp
              </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;