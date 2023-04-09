import React, { useState, useEffect } from "react";
import icon from "../assets/images/icon.png";
import { Link } from "react-router-dom";
/* import BurgerMenu from "./BurgerMenu"; */

function Header() {
  return (
    <nav className="navbar h-[80px] min-w-[calc(100vw-8px)] bg-black text-base text-white flex justify-between items-stretch gap-8 py-2 px-4">
      {/* <BurgerMenu /> */}
      <ul className="navbar__ul p-0 m-0 list-none flex gap-4 items-center">
        {/*     <div>
          <Example />
        </div> */}
        <div /* className="navbar__li" */>
          <Link to="/">
            <img
              className="navbar__icon min-w-[10rem] w-[10rem] cursor-pointer"
              src={icon}
              alt="Home"
            />
          </Link>
        </div>
        <li className="navbar__li">
          <Link
            className="navbar__link w-[6.25rem] text-center p-[0.813rem] rounded-[0.313rem] border-none  no-underline transition-all duration-[120ms] hover:text-red"
            to="/register"
          >
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Register</span>
          </Link>
        </li>
        <li className="navbar__li">
          <Link
            className="navbar__link w-[6.25rem] text-center p-[0.813rem] rounded-[0.313rem] border-none no-underline transition-all duration-[120ms] hover:text-red"
            to="/login"
          >
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Login</span>
          </Link>
        </li>
        <li className="navbar__li">
          <Link
            className="navbar__link w-[6.25rem] text-center p-[0.813rem] rounded-[0.313rem] border-none no-underline transition-all duration-[120ms] hover:text-red"
            to="/map"
          >
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Datos de vehículo</span>
          </Link>
        </li>
        <li className="navbar__li">
          <Link
            className="navbar__link w-[6.25rem] text-center p-[0.813rem] rounded-[0.313rem] border-none no-underline transition-all duration-[120ms] hover:text-red"
            to="/mapcopy"
          >
            {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
            <span>Datos de flota</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
