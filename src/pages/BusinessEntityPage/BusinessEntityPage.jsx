import React from "react";
import BusinessEntity from "../../containers/BusinessEntity/BusinessEntity";
import { BusinessEntityNavBar } from "./../../layouts/layouts";
import { RecordTable, PageHeadingAndSearch } from "../../containers/containers";

const BusinessEntityPage = () => {
  const Business_Entity = [
    "Entity ID",
    "Entity Legal Name",
    "Entity Short Name",
    "Entity Type",
    "Home Country",
    "Base Currency",
    "Status",
  ];
  const Business_EntityData = [
    [
      { value: "Entity123", type: "text" },
      { value: "Entity Legal Name", type: "text" },
      { value: "Entity Short Name", type: "text" },
      { value: "Type", type: "text" },
      { value: "Country Name", type: "text" },
      { value: "Currency", type: "text" },
      { value: "active", type: "button" },
    ],
    [
      { value: "Entity124", type: "text" },
      { value: "Entity Legal Name", type: "text" },
      { value: "Entity Short Name", type: "text" },
      { value: "Type", type: "text" },
      { value: "Country Name", type: "text" },
      { value: "Currency", type: "text" },
      { value: "inactive", type: "button" },
    ],
    [
      { value: "Entity125", type: "text" },
      { value: "Entity Legal Name", type: "text" },
      { value: "Entity Short Name", type: "text" },
      { value: "Type", type: "text" },
      { value: "Country Name", type: "text" },
      { value: "Currency", type: "text" },
      { value: "active", type: "button" },
    ],
  ];

  return (
    <div className="business-page">
      <BusinessEntityNavBar />
      <div className="page-wrapper">
        <PageHeadingAndSearch title="Business Entity" />
        <RecordTable
          tableHeaderArray={Business_Entity}
          tableDataArray={Business_EntityData}
        />
        <BusinessEntity />
      </div>
    </div>
  );
};

export default BusinessEntityPage;
