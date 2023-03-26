import "../assets/css/Home.css";
import Map from "../assets/images/Map.png";
export default function Home() {
  return (
    <div className="main__home-container">
{/*       <h1 className="text-3xl font-bold">Hello world!</h1> */}
      <div className="main__">
        <div className="main__maps-container">
          <img className="main__map" src={Map} />
        </div>
        <div className="main__data-container">
          <div className="main__vehicle-number">Vehículo 1</div>
          <div className="main__vehicle-sensor-container">
            <div className="main__sensor">Puerta:</div>
            <ul className="main__sensor-data">
              <li className="main__sensor-type">
                Estado de la puerta:
                <div className="main__sensor-status">abierta</div>
              </li>
              <li className="main__sensor-type">
                Tiempo máximo de la puerta abierta:
                <div className="main__sensor-status">55 min</div>
              </li>
            </ul>
          </div>
          <div className="main__vehicle-sensor-container">
            <div className="main__sensor">Velocidad:</div>
            <ul className="main__sensor-data">
              <li className="main__sensor-type">
                Velocidad actual:
                <div className="main__sensor-status">30km/h</div>
              </li>
              <li className="main__sensor-type">
                Velocidad máxima:
                <div className="main__sensor-status">80km/h</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
