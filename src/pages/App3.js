import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'; 
import {charCount} from '../components/charCount'


function App3() {
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
              src={require("../img/index.jpg")}
              alt="Avatar"
              class="avatar float-right"
            />
            <NavLink to="/App2">
            <img
              src={require("../img/back.jpg")}
              alt="Avatar"
              class="avatar float-left"
            />
            </NavLink>
          </div>
          
          <div className="fordiv">
            <lable className = "upload">One word or a sentance that would give for yourself.</lable>
            <charCount />
          </div>
          <div className="fordiv">
            <form className="flex-lg-column">
              
                <button type="submit" className="btn btn-primary button">
                  Next &rarr;
                </button>
              
              
              
            </form>
          </div>
        </div>
      </div>
  );
}

export default App3;
