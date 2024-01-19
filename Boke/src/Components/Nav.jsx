const Nav = () => {
    
    return (
      <header>
        <div className="header-content">
          <div className="menu">
            <div className="dropdown">
              <button className="dropbtn">Menú</button>
              <div className="dropdown-content">
                <a href="#articulos">Artículos</a>
                <a href="#contacto">Contacto</a>
                <a href="#quienes-somos">Quienes somos</a>
              </div>
            </div>
          </div>
          {/* Dentro del nav o donde desees colocar el botón de login */}
          <div className="login-container">
            <button id="loginBtn"><i className="fa fa-user"></i> Login</button>
            <div className="login-popup" id="loginPopup">
              {/* Contenido del popup */}
              <form action="#" method="post">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" required />
  
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
  
                <label htmlFor="contact">Contacto:</label>
                <input type="text" id="contact" name="contact" required />
  
                <button type="submit">Iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Nav;
  
  