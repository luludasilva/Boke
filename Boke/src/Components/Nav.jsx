import Login from './Login'; 
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
          <Login/>
      </div>
    </header>
  );
};

export default Nav;
