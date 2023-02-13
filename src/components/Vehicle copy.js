import React, { useState, useEffect } from "react";
import "../assets/css/Map.css";

export default function Vehicle(props) {
  return (
    <div className="map">
      <div className="map__description">
        {props.vehicle.length === 0 && <h1>Vehículo: Cargando...</h1>}
        {props.vehicle.length !== 0 && <h1>Vehículo: {props.vehicle}</h1>}
        {props.doorStatus.length === 0 && <h1>Status de la puerta: Cargando...</h1>}
        {props.doorStatus.length !== 0 && <h1>Status de la puerta: {props.doorStatus}</h1>}
        {props.doorStatus.length === 0 && <h1>Tiempo con la puerta abierta: Cargando...</h1>}
        {props.doorStatus.length !== 0 && (
          <h1>Tiempo con la puerta abierta: {props.doorCounter}min</h1>
        )}
        <div>
          {props.latitude.length === 0 && <h2>Latitud: Cargando...</h2>}
          {props.latitude.length !== 0 && <h2>Latitud: {props.latitude}</h2>}
        </div>
        <div>
          {props.longitude.length === 0 && <h2>Longitud: Cargando...</h2>}
          {props.longitude.length !== 0 && <h2>Longitud: {props.longitude}</h2>}
        </div>
        <div>
          {props.plate.length === 0 && <h2>Patente: Cargando...</h2>}
          {props.plate.length !== 0 && <h2>Patente: {props.plate}</h2>}
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
}
