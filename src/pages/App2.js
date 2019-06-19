import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ImagePicker from "../components/Imagepicker";
import { NavLink } from 'react-router-dom'; 

function App2() {
  return (
    <div className = "warpper">
        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand mx-auto" href="#!">
            <center>#orukadhasoltasir</center>
          </a>
        </nav>
        <div className="fulldiv" >
          <div className="imgdiv">
            <img
              src={require("../img/upload.jpg")}
              alt="Avatar"
              class="avatar float-right"
            />
            <NavLink to="/">
            <img
              src={require("../img/back.jpg")}
              alt="Avatar"
              class="avatar float-left"
            />
            </NavLink>
          </div>
          <div className="fordiv">
            <form className="flex-lg-column">
              <div>
              <label className="upload">Upload your photo</label>
              </div>
              <div className = "propic">
                <br />
             <ImagePicker />
              </div>
              <NavLink to="/App3">
                <button type="submit" className="btn btn-primary button">
                  Next &rarr;
                </button>
                </NavLink>
              
              
              
            </form>
          </div>
        </div>
      </div>
  );
}

export default App2;
