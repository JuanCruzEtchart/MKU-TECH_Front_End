import "../assets/css/Navbar.css";
import React, { useState, useEffect } from "react";
import icon from "../assets/images/icon.png";
import { Link/* , Route, Routes  */} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <div /* className="navbar__li" */>
          <Link to="/">
            <img className="navbar__icon" src={icon} alt="Home" />
          </Link>
        </div>
        <li className="navbar__li">
          <Link className="navbar__link" to="/register">
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Crear usuario</span>
          </Link>
        </li>
        <li className="navbar__li">
          <Link className="navbar__link" to="/map">
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Datos de vehículo</span>
          </Link>
        </li>
        <li className="navbar__li">
          <Link className="navbar__link" to="/mapcopy">
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Datos de flota</span>
          </Link>
        </li>
      </ul>
      {/* 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </nav>
  );
}

export default Header;
