import React, { useState, useEffect } from "react";
import RoleForm from "../../containers/RoleForm/RoleForm";
import { RecordTable, PageHeadingAndSearch } from "../../containers/containers";
import {
  getAllRole,
  getJWTToken,
  addRole,
  deleteRole,
  getRoleById,
  updateRole,
  getRoleByRoleCode,
} from "../../api/api";

const RolePage = () => {
  const [currentEditableRoleId, setCurrentEditableRoleId] = useState(null);

  const [showData, setShowData] = useState({});
  const [fetchedData, setFetchedData] = useState([]);
  // const [jwtToken,setJwtToken] = useState("");

  // const [roleData,setRoleData] = useState([])
  const role = ["Roll Code", "Roll Name", "Status", "Expiry Date"];

  useEffect(() => {
    getAllRole().then((res) => setFetchedData(res));
  }, []);

  useEffect(() => {
    console.log(fetchedData);
    if (fetchedData.length !== 0) {
      setShowData(fetchedData[0]);
    }
  }, [fetchedData]);

  console.log(showData);

  const roleData = fetchedData.map((obj) => {
    return [
      obj.id,
      [
        { value: obj.roleCode, type: "text" },
        { value: obj.roleName, type: "text" },
        { value: obj.status, type: "button" },
        { value: "14/05/2022", type: "text" },
        { value: obj.id, type: "id" },
      ],
    ];
  });

  return (
    <div className="page-wrapper">
      <PageHeadingAndSearch title="Role" />
      <RecordTable
        tableHeaderArray={role}
        tableDataArray={roleData}
        setShowData={setShowData}
        setCurrentEditableId={setCurrentEditableRoleId}
        name="role"
        setFetchedData={setFetchedData}
      />
      <RoleForm
        showData={showData}
        currentEditableId={currentEditableRoleId}
        setFetchedData={setFetchedData}
        setCurrentEditableId={setCurrentEditableRoleId}
      />
    </div>
  );
};

export default RolePage;
