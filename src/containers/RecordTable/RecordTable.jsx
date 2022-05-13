import React from "react";

import editImg from "./../../assets/edit.svg";
import deleteImg from "./../../assets/delete.svg";
import {
  addUser,
  deleteUser,
  getAllUser,
  getUserById,
  getRoleById,
  getActionByCode,
  getLOBByLOBCode,
  deleteRole,
  getAllRole,
  deleteLOB,
  deleteAction,
  getAllLOB,
  getAllAction,
} from "../../api/api";

import "./RecordTable.scss";
// import { CloseOutlined } from "@mui/icons-material";

const RecordTable = ({
  tableHeaderArray,
  tableDataArray,
  setShowData,
  setFetchedData,
  setCurrentEditableId,
  name,
}) => {
  console.log("recordData", tableDataArray);
  const userEditHandler = (id) => {
    console.log(id);
    setCurrentEditableId(id);
  };

  const addMoreHandler = () => {
    console.log("inside add more");
    setShowData({});
    setCurrentEditableId("add");
  };

  const rowSelectHandler = (id) => {
    if (name === "user") {
      getUserById(id).then((res) => setShowData(res));
    } else if (name === "role") {
      getRoleById(id).then((res) => setShowData(res));
    } else if (name === "lob") {
      getLOBByLOBCode(id).then((res) => setShowData(res));
      console.log("LOBCODE", id);
    } else if (name === "action") {
      getActionByCode(id).then((res) => setShowData(res));
    }
  };

  const deleteUserHandler = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    let response;
    if (name === "user") {
      response = await deleteUser(id);
      getAllUser().then((res) => setFetchedData(res));
    } else if (name === "role") {
      response = await deleteRole(id);
      getAllRole().then((res) => setFetchedData(res));
    } else if (name === "lob") {
      response = await deleteLOB(id);
      getAllLOB().then((res) => setFetchedData(res));
    } else if (name === "action") {
      response = await deleteAction(id);
      getAllAction().then((res) => setFetchedData(res));
    }
    console.log("user deleted", response);
  };

  return (
    <div className="record-table">
      <table>
        <thead>
          <tr>
            {tableHeaderArray.map((heading, index) => {
              if (heading === "Status") {
                return (
                  <th key={index} className="text-center">
                    {heading}
                  </th>
                );
              }
              return <th key={index}>{heading}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {tableDataArray.map((array) => {
            return (
              <tr
                key={array[0]}
                onClick={() =>
                  rowSelectHandler(
                    name === "lob" ? array[1][0].value : array[0]
                  )
                }
              >
                {array[1].map((obj, index) => {
                  if (obj.type === "text") {
                    return <td key={index}>{obj.value}</td>;
                  } else if (obj.type === "button") {
                    return (
                      <td key={index} className="text-center">
                        <span
                          className={`status ${
                            obj.value === true
                              ? "status-active"
                              : "status-inactive"
                          }`}
                        >
                          {obj.value === true ? "active" : "inactive"}
                        </span>
                      </td>
                    );
                  } else if (obj.type === "switch") {
                    return (
                      <td key={index}>
                        <span
                          className={`dot ${
                            obj.value === "yes"
                              ? "status-active"
                              : "status-inactive"
                          }`}
                        ></span>
                        <span>{obj.value}</span>
                      </td>
                    );
                  }
                })}

                <td className="buttons">
                  <button
                    className="row-edit-button"
                    onClick={() =>
                      name === "action"
                        ? userEditHandler(array[2])
                        : userEditHandler(array[0])
                    }
                  >
                    <img src={editImg} alt="edit icon" />
                  </button>
                  <button
                    className="row-delete-button"
                    onClick={(event) =>
                      deleteUserHandler(
                        event,
                        name === "action" ? array[2] : array[0]
                      )
                    }
                  >
                    <img src={deleteImg} alt="delete icon" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="add-more-btn" onClick={addMoreHandler}>
        + Add More
      </button>
    </div>
  );
};

export default RecordTable;
