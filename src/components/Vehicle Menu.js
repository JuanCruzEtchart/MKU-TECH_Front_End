import React, { useState, useEffect, useMemo } from "react";
import "../assets/css/Map.css";
import Vehicle from "./Vehicle";
import Map from "./Map";

export default function VehicleMenu() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [plate, setPlate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [doorStatus, setDoorStatus] = useState("");
  const [doorCounter, setDoorCounter] = useState(-1);
  const vehicleURL = "http://localhost:3100/api/fleets/vehicle/4";
  const doorStatusURL = "http://localhost:3100/api/fleets/vehicle/4/doorstatus";

  /*   const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  }); */

  useEffect(() => {
    const getVehicle = async () => {
      const data = await fetch(vehicleURL);
      data.json().then((json) => {
        setLatitude(json.data.latitude);
        setLongitude(json.data.longitude);
        setPlate(json.data.vehicle_plate);
        setVehicle(json.data.id);
      });
    };
    getVehicle();
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

  let vehicleData = {
    latitude: latitude,
    longitude: longitude,
    plate: plate,
    vehicle: vehicle,
    doorStatus: doorStatus,
    doorCounter: doorCounter,
  };

  let vehicleProps = [vehicleData];

  return (
    <div className="map-container">
      <div className="vehicle-info">
        {vehicleProps.map((data, i) => {
          return <Vehicle {...data} key={i} />;
        })}
      </div>
      {/* {isLoaded.length === 0 && <div>Loading...</div>} */}
      <div className="map">
        <Map />
      </div>
    </div>
  );
}
