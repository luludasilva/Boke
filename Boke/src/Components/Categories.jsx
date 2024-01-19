const Categories = () => {
    return (
      <div className="logo-and-image">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h5 className="subtitulo">~ Telas de Barro ~</h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#f2c572' }}>
            ~ Inspiración Bogolan ~
          </h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#6f3f12' }}>
            ~ Serigrafías ~
          </h5>
          <h5 className="subtitulo">~ Colección 2024 ~</h5>
          <h5 className="subtitulo" style={{ backgroundColor: '#f2c572' }}>
            ~ Chapalmalal - Mar del Plata ~
          </h5>
        </div>
        <div className="image">
          <img src="imagen.jpg" alt="Imagen" />
          <img src="imagen1.jpg" alt="Imagen 1" className="new-image" />
          <img src="imagen2.jpg" alt="Imagen 2" className="new-image" />
        </div>
      </div>
    );
  }
  
  export default Categories;