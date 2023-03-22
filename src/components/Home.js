import "../assets/css/Home.css";
import Map from "../assets/images/Map.png";
export default function Home() {
  return (
    <div className="main__home-container">
      <div className="main__">
        <div className="main__maps-container">
          <img className="main__map" src={Map} />
        </div>
        <div className="main__data-container">
          <div className="main__vehicle-number">Vehículo 1</div>
        </div>
      </div>
    </div>
  );
}
