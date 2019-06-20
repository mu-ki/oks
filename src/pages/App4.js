import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'; 

function App4() {
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
              src={require("../img/location.jpg")}
              alt="Avatar"
              class="avatar float-right"
            />
            <NavLink to="/App3">
            <img
              src={require("../img/back.jpg")}
              alt="Avatar"
              class="avatar float-left"
            />
            </NavLink>
          </div>
          <div className="fordiv">
            <form className="flex-lg-column" class="was-validated">
              <div class="form-group">
                <label className="upload"for="exampleInputEmail1">What's your From?</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div class="checkbox">
              <label className="upload"><input type="checkbox" /> I live in the same place.</label>
  </div>
              <div class="form-group">
                <label className="upload"for="exampleInputEmail1">Where do you live then?</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div class="form-group">
                <NavLink to="/App5">
                <button type="submit" className="btn btn-primary1 button">
                  Next &rarr;
                </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
export default App4;