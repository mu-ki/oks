import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App15() {
  return (
    <div className="warpper">
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand mx-auto" href="#!">
          <center>#orukadhasoltasir</center>
        </a>
      </nav>
      <div className="fulldiv">
        <div className="fordiv">
          <div className="imgcenter">
            <img
              class="imgcenter"
              alter="congrulations"
              src={require("../img/cong.jpg")}
            />
          </div>
            <div class="form-group">
            <div className = "cpydiv">
            <div class="input-group mb-3">

            <div class="input-group-prepend">
                <span class="custom-file">
                <div class="circleBase type1">

                <img src={require("../img/attach.jpg")} style = {{width:"24px",marginLeft: "11px",marginTop:" 11px"}} /></div>
                </span>
              </div>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" readonly/>
              <div class="input-group-append">
                <span class="input-group-text"><img
              src={require("../img/copy.jpg")}
              alt="Avatar"
              style = {{width:"23px"}}
            /></span>
              </div>
            </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary button">
                GoodLuck!Bye:)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App15;
