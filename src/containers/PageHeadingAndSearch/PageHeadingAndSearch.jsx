import React from "react";
import searchIcon from "./../../assets/search.svg";
import {CheckboxComponent} from "./../../components/components"

const PageHeadingAndSearch = ({ title }) => {
  return (
    <div className="title-search-wrapper">
      <div className="title d-flex align-items-center">{title}</div>
      <div className="left-section-wrapper d-flex">

        <CheckboxComponent/>
      <div className="search-wrapper ps-3">
        <img className="searchIcon" src={searchIcon} alt="searchIcon"/>
        <input className="search-input" type="text" placeholder="search" />
      </div>
      </div>
    </div>
  );
};

export default PageHeadingAndSearch;
