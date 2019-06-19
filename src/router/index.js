import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">App1</NavLink>
      <NavLink to="/App2">App2</NavLink>
      <NavLink to="/App3">App3</NavLink>
    </div>
  );
};

export default Navigation;