import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.scss";
import { RecordTable, PageHeadingAndSearch } from "./containers/containers";
import { LeftSideBar, NavBar, BusinessEntityNavBar } from "./layouts/layouts";
import {
  UserPage,
  RolePage,
  LOBPage,
  ActionPage,
  BusinessEntityPage,
} from "./pages/pages";
import { UserForm } from "./containers/containers";
import { Calculation } from "./components/components";

import "./styles.scss";
import EmailEntityListForm from "./containers/EmailEntityListForm/EmailEntityListForm";
import TaxForm from "./containers/TaxForm/TaxForm";
import TaxDocument from "./containers/TaxDocument/TaxDocument";
const App = () => {
  // const businessId =

  const Entity_Email_List = [
    "Email",
    "Claim",
    "Underwriting",
    "Accounting",
    "Status",
  ];
  const Tax = [
    "Tax Name",
    "Reg No",
    "Rate",
    "Calculation ID",
    "TDS/WTH Tax",
    "Is TDS_WTH Req",
    "Is Tax Under Rev Charge",
    "Is Negative",
    "Status",
  ];
  const Tax_document = [
    "Document Name",
    "Is Required",
    "Start Date",
    "End Date",
  ];
  const Entity_Email_ListData = [
    [
      { value: "mili.manuh97@gmail.com", type: "text" },
      { value: "Option1", type: "text" },
      { value: "Option1", type: "text" },
      { value: "Option1", type: "text" },
      { value: "active", type: "button" },
    ],
    [
      { value: "mili.manuh97@gmail.com", type: "text" },
      { value: "Option2", type: "text" },
      { value: "Option2", type: "text" },
      { value: "Option2", type: "text" },
      { value: "inactive", type: "button" },
    ],
    [
      { value: "mili.manuh97@gmail.com", type: "text" },
      { value: "Option3", type: "text" },
      { value: "Option3", type: "text" },
      { value: "Option3", type: "text" },
      { value: "active", type: "button" },
    ],
  ];

  const TaxData = [
    [
      { value: "GST1", type: "text" },
      { value: "Text", type: "text" },
      { value: "12", type: "text" },
      { value: "CID1", type: "text" },
      { value: "Type", type: "text" },
      { value: "yes", type: "switch" },
      { value: "yes", type: "switch" },
      { value: "yes", type: "switch" },
      { value: "active", type: "button" },
    ],
    [
      { value: "GST2", type: "text" },
      { value: "Text", type: "text" },
      { value: "13", type: "text" },
      { value: "CID2", type: "text" },
      { value: "Type", type: "text" },
      { value: "no", type: "switch" },
      { value: "no", type: "switch" },
      { value: "no", type: "switch" },
      { value: "inactive", type: "button" },
    ],
    [
      { value: "GST3", type: "text" },
      { value: "Text", type: "text" },
      { value: "14", type: "text" },
      { value: "CID3", type: "text" },
      { value: "Type", type: "text" },
      { value: "yes", type: "switch" },
      { value: "yes", type: "switch" },
      { value: "yes", type: "switch" },
      { value: "active", type: "button" },
    ],
  ];
  const Tax_documentData = [
    [
      { value: "Doc123", type: "text" },
      { value: "yes", type: "switch" },
      { value: "01/03/2022", type: "text" },
      { value: "01/03/2022", type: "text" },
    ],
    [
      { value: "Doc124", type: "text" },
      { value: "no", type: "switch" },
      { value: "01/03/2022", type: "text" },
      { value: "01/03/2022", type: "text" },
    ],
    [
      { value: "Doc125", type: "text" },
      { value: "yes", type: "switch" },
      { value: "01/03/2022", type: "text" },
      { value: "01/03/2022", type: "text" },
    ],
  ];

  return (
    <>
      <div className="application-wrapper d-flex">
        <div className="left-section-wrapper w-20">
          <LeftSideBar />
        </div>

        <div className="right-section-wrapper w-80 p-0">
          <Router>
            <NavBar />
            <div className="routes-container">
              <Routes>
                <Route exact path="/GST-Tax" element={<UserPage />} />
                <Route path="/GST-Tax/role" element={<RolePage />} />
                <Route path="/GST-Tax/lob" element={<LOBPage />} />
                <Route path="/GST-Tax/action" element={<ActionPage />} />
                <Route
                  path="/GST-Tax/business-entity"
                  element={<BusinessEntityPage />}
                />
                <Route
                  path="/GST-Tax/businessentity/Email-Entity-List"
                  element={
                    <>
                      <BusinessEntityNavBar />
                      <div className="page-wrapper">
                        <PageHeadingAndSearch title="Entity Email List" />
                        <RecordTable
                          tableHeaderArray={Entity_Email_List}
                          tableDataArray={Entity_Email_ListData}
                        />
                        <EmailEntityListForm />
                      </div>
                    </>
                  }
                />
                <Route
                  path="/GST-Tax/businessentity/Tax"
                  element={
                    <>
                      <BusinessEntityNavBar />
                      <div className="page-wrapper">
                        <PageHeadingAndSearch title="Tax" />
                        <RecordTable
                          tableHeaderArray={Tax}
                          tableDataArray={TaxData}
                        />
                        <TaxForm />
                      </div>
                    </>
                  }
                />
                <Route
                  path="/GST-Tax/businessentity/calculation"
                  element={
                    <>
                      <BusinessEntityNavBar />
                      <div className="page-wrapper">
                        <Calculation />
                      </div>
                    </>
                  }
                />
                <Route
                  path="/GST-Tax/businessentity/TaxDoc"
                  element={
                    <>
                      <BusinessEntityNavBar />
                      <div className="page-wrapper">
                        <PageHeadingAndSearch title="Tax" />
                        <RecordTable
                          tableHeaderArray={Tax_document}
                          tableDataArray={Tax_documentData}
                        />
                        <TaxDocument />
                      </div>
                    </>
                  }
                />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
