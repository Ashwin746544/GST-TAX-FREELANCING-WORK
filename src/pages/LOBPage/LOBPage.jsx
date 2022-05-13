import React, { useState, useEffect } from "react";
import RoleForm from "../../containers/RoleForm/RoleForm";
import { RecordTable, PageHeadingAndSearch } from "../../containers/containers";
import {
  addLOB,
  deleteLOB,
  getAllLOB,
  getLOBByLOBCode,
  updateLOB,
} from "../../api/api";

const LOBPage = () => {
  const [currentEditableLobId, setCurrentEditableLobId] = useState(null);

  const [showData, setShowData] = useState({});
  const [fetchedData, setFetchedData] = useState([]);
  const LOB = ["LOB Code", "LOB Name", "Status", "Expiry Date"];

  useEffect(() => {
    getAllLOB().then((res) => setFetchedData(res));
  }, []);

  useEffect(() => {
    console.log(fetchedData);
    if (fetchedData.length !== 0) {
      setShowData(fetchedData[0]);
    }
  }, [fetchedData]);

  console.log(showData);

  const LOBData = fetchedData.map((obj) => {
    return [
      obj.id,
      [
        { value: obj.lobCode, type: "text" },
        { value: obj.lobName, type: "text" },
        { value: obj.status, type: "button" },
        { value: "14/05/2022", type: "text" },
        { value: obj.id, type: "id" },
      ],
    ];
  });

  return (
    <div className="page-wrapper">
      <PageHeadingAndSearch title="Line Of Business" />
      <RecordTable
        tableHeaderArray={LOB}
        tableDataArray={LOBData}
        setShowData={setShowData}
        setCurrentEditableId={setCurrentEditableLobId}
        name="lob"
        setFetchedData={setFetchedData}
      />
      <RoleForm
        lob
        showData={showData}
        currentEditableId={currentEditableLobId}
        setFetchedData={setFetchedData}
        setCurrentEditableId={setCurrentEditableLobId}
      />
    </div>
  );
};

export default LOBPage;
