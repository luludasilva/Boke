import React, { useState } from 'react';
import Login from './Login';

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

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
              <button onClick={toggleLogin}>Login</button>
            </div>
          </div>
        </div>
        {showLogin && <Login />}
      </div>
    </header>
  );
};

export default Nav;
