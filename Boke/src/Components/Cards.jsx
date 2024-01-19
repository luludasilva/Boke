
const Cards = () => {
    return (
      <section id="articulos" className="main-content">
        {/* Dentro de la sección de Artículos */}
        <div className="centered">
          <h2>Artículos</h2>
          <div className="container">
            <div className="item">
              <img src="Mochilas.jpg" alt="Mochilas" />
              <p>Mochilas de tela</p>
            </div>
            <div className="item">
              <img src="Buzos.jpg" alt="Buzos" />
              <p>Buzos</p>
            </div>
            <div className="item">
              <img src="Remerones.jpg" alt="Remerones" />
              <p>Remerones</p>
            </div>
            <div className="item">
              <img src="Remeron.jpg" alt="Remeron" />
              <p>Remerón vestido</p>
            </div>
            <div className="item">
              <img src="Camperas.jpg" alt="Camperas con Capuchas" />
              <p>Camperas con Capuchas</p>
            </div>
            <div className="item">
              <img src="Pilusos.jpg" alt="Pilusos" />
              <p>Pilusos</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Cards;