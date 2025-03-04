import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'; 

function App1() {
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
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
              alt="Avatar"
              class="avatar float-right"
            />
          </div>
          <div className="fordiv">
            <form className="flex-lg-column" class="was-validated">
              <div class="form-group">
                <label className="upload" for="exampleInputEmail1">What's your Name?</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group">
                <label className="upload" for="exampleInputPassword1">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div class="form-group">
                <label className="upload" for="example">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Email id"
                />
                <div>
                <NavLink to="/App2">
                <button type="submit" className="btn btn-primary1 button">
                  Next &rarr;
                </button>
                </NavLink>
              </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
  );
}

export default App1;
