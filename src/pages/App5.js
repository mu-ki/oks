import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

class App4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: []
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.value);

      return {
        list,
        value: ""
      };
    });
  };
  render() {
    return (
      <div classNameName="warpper">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand mx-auto" href="#!">
            <center>#orukadhasoltasir</center>
          </a>
        </nav>
        <div classNameName="fulldiv">
          <div classNameName="imgdiv">
            <img
              src={require("../img/trans.jpg")}
              alt="Avatar"
              className="avatar float-right"
            />
            <NavLink to="/App4">
              <img
                src={require("../img/back.jpg")}
                alt="Avatar"
                className="avatar float-left"
              />
            </NavLink>
          </div>
          <div classNameName="fordiv">
            <form classNameName="flex-lg-column">
              <div className="input-group mb-3 fordiv">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                  >
                    +
                  </button>
                </div>{" "}
              </div>
            </form>
            {/* <div class="chipitem"> */}
                {this.state.list.map(item => (
                <div class="chip">
                <span class="closebtn" onclick="">
                <p key={item}>{item}  &times;</p>
               
                </span>
                </div>
              
              
              ))} 
             
            
            <form>
              <div className="form-group">
                <NavLink to="/App6">
                  <button
                    className="btn btn-primary1 button"
                  >
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
}

export default App4;
