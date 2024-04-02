import React from "react";
import "./nav.css";
import { CiMenuBurger } from "react-icons/ci";
import AARON_PFP from "../../../assets/AARON_PFP.jpeg";
import HEALTH_APP_LOGO from "../../../assets/HEALTH_APP_LOGO.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <CiMenuBurger style={{ width: "3.5rem", height: "3.5rem" }} />
        <img style={{ height: "3.8rem" }} src={HEALTH_APP_LOGO} />
        <img className="profile-pic" src={AARON_PFP} />
      </div>
    </div>
  );
};

export default Nav;
