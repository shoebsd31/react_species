import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Regions
      </NavLink>
      {" | "}
      {/* <NavLink to="/species" activeStyle={activeStyle}>
        Species
      </NavLink>
      {" | "}
      <NavLink to="/conservation" activeStyle={activeStyle}>
        Conservation Measures
      </NavLink> */}
    </nav>
  );
};

export default Header;
