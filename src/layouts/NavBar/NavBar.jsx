import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  // const isActive = (isActive) => {
  //   if (isActive) {
  //     return {
  //       fontStyle: "normal",
  //       fontWeight: "700",
  //       borderBottom: "4px solid #3476E4",
  //     };
  //   }
  // };

  return (
    <div className="navbar-section-wrapper p-3 w-100">
      <div className="navbar-section d-flex flex-column">
        <div className="nav-top-section d-flex flex-column">
          <div className="heading">Admin</div>
          <div className="sub-heading mt-1">Admin</div>
        </div>
        <div className="nav-tab-wrapper mt-2">
          <ul className="nav-tab d-flex ">
            <li>
              <NavLink
                to="/GST-Tax"
                className="page-heading"
                // style={isActive}
                // activeClassName={(active) => (active ? "active" : "")}
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GST-Tax/role"
                className="page-heading"
                // style={isActive}
                // activeClassName={(active) => (active ? "active" : "")}
              >
                Role
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GST-Tax/action"
                className="page-heading"
                // style={isActive}
                // activeClassName={(active) => (active ? "active" : "")}
              >
                Action
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GST-Tax/lob"
                className="page-heading"
                // style={isActive}
                // activeClassName={(active) => (active ? "active" : "")}
              >
                Line of Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/GST-Tax/business-entity"
                className="page-heading"
                // style={isActive}
                // activeClassName={(active) => (active ? "active" : "")}
              >
                Business Entity
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
