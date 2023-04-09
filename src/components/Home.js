/* import "../assets/css/Home.css"; */
import Map from "../assets/images/Map.png";
import { Link /* , Route, Routes  */ } from "react-router-dom";
export default function Home() {
  return (
    <div className="main__home-container min-w-[calc(100vw-8px)] min-h-[calc(100vh-96px)] bg-[#212121] py-[50px] px-3.5 mx-auto flex gap-3.5 gap-y-10 items-start justify-evenly content-start flex-wrap text-white overflow-x-hidden text-base xl:py-[10px] 2xl:text-xs 2xl:py-[10px] 2xl:content-center">
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
      <div className="bg-[#272727] shadow-default rounded-default ">
        <div className="main__maps-container relative inline-block">
          <Link to="/map">
            <img
              className="main__map w-[400px] h-[288px] rounded-default shadow-default mb-4 2xl:w-[300px] 2xl:h-[216px]" 
              src={Map}
            />
          </Link>
          <div className="absolute top-0 left-0 text-white p-1.5 mt-1 ml-1 rounded-default bg-dark-gray  xl:p-3/4">
            <p>Vehículo 1</p>
          </div>
        </div>
        <div className="main__data-container bg-[#4d4d4d] rounded-default border-l-2 border-l-red shadow-default pb-3">
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
                <div className="">Tiempo máximo de la puerta abierta:</div>
                <div className="main__sensor-status p-1 px-2 ml-2 bg-dark-gray rounded-default">
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
