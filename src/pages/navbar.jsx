import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {


  return (
    <div className="navbar-container">
      <NavLink 
      style={{ color: "#5449C7", fontWeight: "bolder",textDecoration:"none",backgroundColor:"white" }} to="/">
        MyForum
      </NavLink>
    </div>
  );
}

export default NavBar;
