import React, { useState, useEffect } from "react";
import "../assets/css/Map.css";

export default function Map() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [plate, setPlate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [doorStatus, setDoorStatus] = useState("");
  const [doorCounter, setDoorCounter] = useState(-1);
  const vehicleURL = "http://localhost:3000/api/fleets/vehicle/4";
  const doorStatusURL = "http://localhost:3000/api/fleets/vehicle/4/doorstatus";

  useEffect(() => {
    const getFleet = async () => {
      const data = await fetch(vehicleURL);
      data.json().then((json) => {
        setLatitude(json.data.latitude);
        setLongitude(json.data.longitude);
        setPlate(json.data.vehicle_plate);
        setVehicle(json.data.id);
      });
    };
    getFleet();
  }, []);

  useEffect(() => {
    const getDoorStatus = async () => {
      const data = await fetch(doorStatusURL);
      data.json().then((json) => {
        if (json.data === 1) {
          setDoorStatus("Abierta");
          setDoorCounter((doorCounter) => doorCounter + 1);
        } else {
          setDoorStatus("Cerrada");
          setDoorCounter((doorCounter) => (doorCounter = 0));
        }
      });
    };
    getDoorStatus();
    const interval = setInterval(() => {
      return getDoorStatus();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="map">
      <div className="map__description">
        {vehicle.length === 0 && <h1>Cargando...</h1>}
        {vehicle.length !== 0 && <h1>Vehículo: {vehicle}</h1>}
        {doorStatus.length === 0 && <h1>Cargando...</h1>}
        {doorStatus.length !== 0 && <h1>Status de la puerta: {doorStatus}</h1>}
        {doorStatus.length === 0 && <h1>Cargando...</h1>}
        {doorStatus.length !== 0 && (
          <h1>Tiempo con la puerta abierta: {doorCounter}min</h1>
        )}
        <div>
          {latitude.length === 0 && <h2>Latitud: Cargando...</h2>}
          {latitude.length !== 0 && <h2>Latitud: {latitude}</h2>}
        </div>
        <div>
          {longitude.length === 0 && <h2>Longitud: Cargando...</h2>}
          {longitude.length !== 0 && <h2>Longitud: {longitude}</h2>}
        </div>
        <div>
          {plate.length === 0 && <h2>Patente: Cargando...</h2>}
          {plate.length !== 0 && <h2>Patente: {plate}</h2>}
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
}
