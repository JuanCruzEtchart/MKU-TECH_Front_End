/* import "../assets/css/Home.css"; */
import Map from "../assets/images/Map.png";
export default function Home() {
  return (
    <div className="main__home-container w-screen h-[calc(100vh-96px)] min-h-[calc(100vh-96px)] bg-[#212121] py-[50px] mx-auto flex items-start justify-evenly flex-wrap text-white overflow-x-hidden text-base">
      <div className="">
        <div className="main__maps-container relative inline-block">
          <img
            className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4"
            src={Map}
          />
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default mb-4 text-base pb-3">
          <div className="main__vehicle-number bg-dark-gray p-1.5 inline-block rounded-default mt-2 ml-2">
            Vehículo 1
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Puerta:</div>
            <ul className="main__sensor-data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Estado de la puerta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  abierta
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Tiempo máximo de la puerta abierta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default ">
                  55 min
                </div>
              </li>
            </ul>
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Velocidad:</div>
            <ul className="main__sensor-data data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Velocidad actual:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  30km/h
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Velocidad máxima:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  80km/h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fin de primer vehículo */}
      <div>
        <div className="main__maps-container relative inline-block">
          <img
            className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4"
            src={Map}
          />
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default mb-4 text-base pb-3">
          <div className="main__vehicle-number bg-dark-gray p-1.5 inline-block rounded-default mt-2 ml-2">
            Vehículo 1
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Puerta:</div>
            <ul className="main__sensor-data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Estado de la puerta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  abierta
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Tiempo máximo de la puerta abierta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default ">
                  55 min
                </div>
              </li>
            </ul>
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Velocidad:</div>
            <ul className="main__sensor-data data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Velocidad actual:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  30km/h
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Velocidad máxima:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  80km/h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fin de segundo vehículo */}
      <div>
        <div className="main__maps-container relative inline-block">
          <img
            className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4"
            src={Map}
          />
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default mb-4 text-base pb-3">
          <div className="main__vehicle-number bg-dark-gray p-1.5 inline-block rounded-default mt-2 ml-2">
            Vehículo 1
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Puerta:</div>
            <ul className="main__sensor-data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Estado de la puerta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  abierta
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Tiempo máximo de la puerta abierta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default ">
                  55 min
                </div>
              </li>
            </ul>
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Velocidad:</div>
            <ul className="main__sensor-data data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Velocidad actual:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  30km/h
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Velocidad máxima:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  80km/h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fin de segundo vehículo */}
      <div>
        <div className="main__maps-container relative inline-block">
          <img
            className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4"
            src={Map}
          />
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default mb-4 text-base pb-3">
          <div className="main__vehicle-number bg-dark-gray p-1.5 inline-block rounded-default mt-2 ml-2">
            Vehículo 1
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Puerta:</div>
            <ul className="main__sensor-data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Estado de la puerta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  abierta
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Tiempo máximo de la puerta abierta:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default ">
                  55 min
                </div>
              </li>
            </ul>
          </div>
          <div className="main__vehicle-sensor-container flex flex-col bg-[rgba(217,217,217,0.1)] rounded-default p-2.5 border-2 border-black m-2.5 mb-0">
            <div className="main__sensor">Velocidad:</div>
            <ul className="main__sensor-data data flex flex-col justify-between space-y-2">
              <li className="main__sensor-type flex items-center">
                Velocidad actual:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  30km/h
                </div>
              </li>
              <li className="main__sensor-type flex items-center">
                Velocidad máxima:
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
                  80km/h
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    /* <div className="main__home-container">
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
    </div> */
  );
}

{
  /* <div className="main__home-container">
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
    </div> */
}
