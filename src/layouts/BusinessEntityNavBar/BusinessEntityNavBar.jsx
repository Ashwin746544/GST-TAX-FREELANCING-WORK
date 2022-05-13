import React from "react";
import { NavLink } from "react-router-dom";

const BusinessEntityNavBar = () => {
  return (
    <div className="business-tab pb-4">
      <ul className="d-flex ">
        <li>
          <NavLink
            to="/GST-Tax/business-entity"
            className="px-3 py-2 business-tab-link"
            // activeClassName={(active) => (active ? "active" : "")}
          >
            Business Entity
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/GST-Tax/businessentity/Email-Entity-List"
            className="px-3 py-2 business-tab-link "
            // activeClassName={(active) => (active ? "active" : "")}
          >
            Entity Email List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/GST-Tax/businessentity/Tax"
            className="px-3 py-2 business-tab-link "
            // activeClassName={(active) => (active ? "active" : "")}
          >
            Tax
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/GST-Tax/businessentity/calculation"
            className="px-3 py-2 business-tab-link "
            // activeClassName={(active) => (active ? "active" : "")}
          >
            Calculation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/GST-Tax/businessentity/TaxDoc"
            className="px-3 py-2 business-tab-link "
            // activeClassName={(active) => (active ? "active" : "")}
          >
            Tax Document
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BusinessEntityNavBar;
