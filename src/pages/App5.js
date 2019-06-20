import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';


class App5 extends Component {
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
    return <div className = "warpper">
        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand mx-auto" href="#!">
            <center>#orukadhasoltasir</center>
          </a>
        </nav>
        <div className="fulldiv" >
        <div className="imgdiv">
          <img
              src={require("../img/trans.jpg")}
              alt="Avatar"
              class="avatar float-right"
            />
            <NavLink to="/App4">
            <img
              src={require("../img/back.jpg")}
              alt="Avatar"
              class="avatar float-left"
            />
            </NavLink>
          </div>
          <div className="fordiv">
            <form className="flex-lg-column mt-5">
              <div class="form-group">
                <label className="upload"for="exampleInputEmail1">What language can you speak?</label>
                </div>
                <div className="input-group fordiv">
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

              {this.state.list.map(item => (
                <div class="chip">
                <span class="closebtn" onclick="">
                <p key={item}>{item}  &times;</p>
               
                </span>
                </div>
              ))} 
             
              <div class="form-group">
                <NavLink to="/App6">
                <button type="submit" className="btn btn-primary1 button">
                  Next &rarr;
                </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
  };
}
export default App5;