import React, { useEffect, useState } from "react";
import UserForm from "../../containers/UserForm/UserForm";

import { RecordTable, PageHeadingAndSearch } from "../../containers/containers";
import {
  addUser,
  deleteUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../../api/api";

const UserPage = () => {
  const user = ["User ID", "Email ID", "Status", "Expiry Date"];
  const [currentEditableUserId, setCurrentEditableUserId] = useState(null);

  const [showData, setShowData] = useState({});
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    getAllUser().then((res) => setFetchedData(res));
  }, []);

  useEffect(() => {
    console.log(fetchedData);
    if (fetchedData.length !== 0) {
      setShowData(fetchedData[0]);
    }
  }, [fetchedData]);

  // console.log(showData);

  const userData = fetchedData.map((obj) => {
    return [
      obj.id,
      [
        { value: obj.userId, type: "text" },
        { value: obj.userName, type: "userName" },
        { value: obj.email, type: "text" },
        { value: "kaushal", type: "password" },
        { value: obj.lobCode, type: "lobCode" },
        { value: obj.roleCode, type: "roleCode" },
        { value: obj.status, type: "button" },
        { value: "01/03/2022", type: "created Date" },
        { value: "01/03/2022", type: "text" },
        { value: obj.id, type: "id" },
      ],
    ];
  });

  // const showFormData = (data) => {
  //   setShowData(data);
  // };

  return (
    <div className="page-wrapper">
      <PageHeadingAndSearch title="User" />
      <RecordTable
        tableHeaderArray={user}
        tableDataArray={userData}
        setShowData={setShowData}
        setFetchedData={setFetchedData}
        setCurrentEditableId={setCurrentEditableUserId}
        name="user"
        setFetchedData={setFetchedData}
      />
      <UserForm
        showData={showData}
        currentEditableUserId={currentEditableUserId}
        setFetchedData={setFetchedData}
        setCurrentEditableUserId={setCurrentEditableUserId}
      />
    </div>
  );
};

export default UserPage;
