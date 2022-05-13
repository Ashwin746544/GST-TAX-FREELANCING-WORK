import React, { useState, useEffect } from "react";
import {
  addAction,
  deleteAction,
  getActionByCode,
  getActionByRoleCode,
  getAllAction,
  updateAction,
} from "../../api/api";
import ActionForm from "../../containers/ActionForm/ActionForm";
import { RecordTable, PageHeadingAndSearch } from "../../containers/containers";

const ActionPage = () => {
  const action = [
    "Action Code",
    "Action Name",
    "Roll Code",
    "Status",
    "Expiry Date",
  ];

  const [currentEditableActionId, setCurrentEditableActionId] = useState(null);

  const [showData, setShowData] = useState({});
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    getAllAction().then((res) => {
      setFetchedData(res);
    });
    // addAction("action_new_code","action_name",true,true,true,true,"rol4","roleFour",true,true);
    // deleteAction(4)
    // updateAction(5,"update_action_code","action_name",true,true,true,true,"rol4","roleFour",true,true);
    // getActionByCode("New Action").then(res => console.log(res))
    // getActionByRoleCode("role200").then(res => console.log(res))
  }, []);

  useEffect(() => {
    console.log(fetchedData);
    if (fetchedData.length !== 0) {
      setShowData(fetchedData[0]);
    }
  }, [fetchedData]);

  const actionData = fetchedData.map((obj) => {
    return [
      obj.actionCode,
      [
        { value: obj.actionCode, type: "text" },
        { value: obj.actionName, type: "text" },
        { value: obj.roleModel.roleCode, type: "text" },
        { value: obj.status, type: "button" },
        { value: "01/03/2022", type: "text" },
      ],
      obj.id,
    ];
  });

  return (
    <div className="page-wrapper">
      <PageHeadingAndSearch title="Action" />
      <RecordTable
        tableHeaderArray={action}
        tableDataArray={actionData}
        setShowData={setShowData}
        setCurrentEditableId={setCurrentEditableActionId}
        name="action"
        setFetchedData={setFetchedData}
      />
      <ActionForm
        showData={showData}
        currentEditableActionId={currentEditableActionId}
        setFetchedData={setFetchedData}
        setCurrentEditableActionId={setCurrentEditableActionId}
      />
    </div>
  );
};

export default ActionPage;
