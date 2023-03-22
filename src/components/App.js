import React from "react";
import Header from "./Navbar";
import Register from "./Register";
import VehicleMenu from "./Vehicle Menu";
import Login from "./Login";
import MapCopy from "./Map copy";
import Home from "./Home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import "../assets/css/App.css";

function App() {
  return (
    <React.Fragment>
      <Header className="app__navbar"/>
      <div className="app__routes-container">
        <Routes>
          <Route clasName="app__routes-element" path="/" element={<Home />} />
          <Route
            clasName="app__routes-element"
            path="/register"
            element={<Register />}
          />
          <Route
            clasName="app__routes-element"
            path="/login"
            element={<Login />}
          />
          <Route
            clasName="app__routes-element"
            path="/map"
            element={<VehicleMenu />}
          />
          <Route
            clasName="app__routes-element"
            path="/mapcopy"
            element={<MapCopy />}
          />
          <Route
            clasName="app__routes-element"
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
