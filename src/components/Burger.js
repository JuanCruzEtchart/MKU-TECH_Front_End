import React from "react";
import "../assets/css/Burger.css";

const Burger = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>

      <div class="header__sidebar">
        <a href="/" class="header__home sidebar-item">
          <div>Inicio</div>
        </a>
        <a href="/product/movies" class="header__movies sidebar-item">
          <div>Películas</div>
        </a>
        <a href="/product/series" class="header__series sidebar-item ">
          <div>Series</div>
        </a>
        <a href="#" class="header__categories sidebar-item">
          <div>Categorías</div>
        </a>
        <a href="/product/list" class="header__categories sidebar-item">
          Editar
        </a>
        <a href="#" class="header__categories sidebar-item">
          Mi lista
        </a>
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default Burger;
