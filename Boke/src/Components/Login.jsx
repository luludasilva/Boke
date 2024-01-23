
/*document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("loginPopup").style.display = "block";
  });
  
  document
    .getElementById("loginPopup")
    .addEventListener("mouseleave", function () {
      this.style.display = "none";
    });*/

    import React, { useState } from 'react';

    const Login = () => {
      const [isPopupVisible, setPopupVisible] = useState(false);
    
      const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
      };
    
      return (
        <div className="login-container">
          <button id="loginBtn" onClick={togglePopup}>
            <i className="fa fa-user"></i> Login
          </button>
          {isPopupVisible && (
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
          )}
        </div>
      );
    };
    
    export default Login;
    