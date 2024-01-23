import logo from '../assets/logo.png';
import imagen from '../assets/imagen.jpg';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';

const Categories = () => {
    return (
      <div className="logo-and-image">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h5 className="subtitulo">~ Telas de Barro ~</h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#f2c572' }}>
            ~ Inspiración Bogolan ~
          </h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#6f3f12' }}>
            ~ Serigrafías ~
          </h5>
          <h5 className="subtitulo">~ Colección 2024 ~</h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#f2c572' }}>
            ~ Mar del Plata ~
          </h5>
        </div>
        <div className="image">
          <img src={imagen} alt="Imagen" />
          <img src={imagen1} alt="Imagen 1" className="new-image" />
          <img src={imagen2} alt="Imagen 2" className="new-image" />
        </div>
      </div>
    );
  }
  
  export default Categories;