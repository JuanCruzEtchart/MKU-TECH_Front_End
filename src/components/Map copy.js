import React, { useState, useEffect } from "react";
import "../assets/css/Map.css";
import Vehicle from "./Vehicle copy";

export default function Map() {
  const [fleet, setFleet] = useState("");
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [plate, setPlate] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [doorStatus, setDoorStatus] = useState([]);
  const [doorCounter, setDoorCounter] = useState(-1); //REVISAR CONTADOR POR VEHICULO DE LA FLOTA
  const vehicleURL = "http://localhost:3100/api/fleets/vehicle/3";
  const fleetURL = "http://localhost:3100/api/fleets";
  const doorStatusURL = "http://localhost:3100/api/fleets/vehicle/4/doorstatus";

  /*  useEffect(() => {
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
  }, []); */

  useEffect(() => {
    const getFleet = async () => {
      const data = await fetch(fleetURL);
      data.json().then((json) => {
        setFleet(json.data);
        /* console.log(fleet); */
      });
    };
    getFleet();
  }, []);

  /*   useEffect(() => {
    fetch(fleetURL)
      .then((response) => {
        return response.json();
      })
      .then((fleet) => {
        setFleet(fleet.data);
      })
      .catch((error) => console.log(error));
  }, []); */

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
      <h1>MAP copy:</h1>
      {!!fleet &&
        fleet.map((data, i) => {
          return <Vehicle {...data} key={i} />;
        })}
    </div>
  );
}
