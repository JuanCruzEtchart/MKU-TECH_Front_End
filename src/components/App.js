import React from "react";
import Header from "./Navbar";
import Register from "./Register";
import Register2 from "./Register copy";
import Map from "./Map";
import Home from "./Home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import "../assets/css/App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="app__routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
