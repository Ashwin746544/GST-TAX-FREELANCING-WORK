import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import { Button, Form } from "react-bootstrap";
import InputComponent from "../../components/InputComponent/InputComponent";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import {
  addRole,
  updateRole,
  addLOB,
  updateLOB,
  getAllRole,
  getAllLOB,
} from "../../api/api";
import { useState, useEffect } from "react";

const RoleForm = ({
  lob,
  showData,
  setCurrentEditableId,
  currentEditableId,
  setFetchedData,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    code: "",
    name: "",
    status: false,
    created_date: "2022-04-21",
    expiry_date: "2022-04-21",
  });
  console.log(showData, formData);

  useEffect(() => {
    console.log("show data", showData);
    setFormData({
      id: showData.id,
      code: lob ? showData.lobCode : showData.roleCode,
      name: lob ? showData.lobName : showData.roleName,
      status: showData.status,
      created_date: "2022-04-21",
      expiry_date: "2022-04-21",
    });
  }, [showData]);

  const onChangeHandler = (name, value) => {
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    if (currentEditableId && currentEditableId !== "add") {
      //Edit role
      if (lob) {
        const response = await updateLOB({
          lobId: formData.id,
          lobCode: formData.code,
          lobName: formData.name,
          lobStatus: formData.status,
        });
        getAllLOB().then((res) => setFetchedData(res));
        setCurrentEditableId(null);
        console.log("lob Updated", response);
      } else {
        console.log("before update", formData);
        const response = await updateRole({
          roleId: formData.id,
          roleName: formData.name,
          roleCode: formData.code,
          roleStatus: formData.status,
        });
        getAllRole().then((res) => setFetchedData(res));
        setCurrentEditableId(null);
        console.log("role Updated", response);
      }
    } else {
      // Add role
      if (lob) {
        const response = await addLOB({
          lobCode: formData.code,
          lobName: formData.name,
          lobStatus: formData.status,
        });
        getAllLOB().then((res) => setFetchedData(res));
        setCurrentEditableId(null);
        console.log("LOB Added", response);
      } else {
        const response = await addRole({
          roleCode: formData.code,
          roleName: formData.name,
          roleStatus: formData.status,
        });
        getAllRole().then((res) => setFetchedData(res));
        setCurrentEditableId(null);
        console.log("Role Added", response);
      }
    }
  };
  return (
    <Form onSubmit={submitHandler} className="RoleForm">
      <InputComponent
        label={`${lob ? "LOB" : "Role"} Code`}
        placeholder={`Enter ${lob ? "LOB" : "Role"} Code`}
        type="text"
        name="code"
        value={formData.code}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableId ? false : true}
      />
      <InputComponent
        label={`${lob ? "LOB" : "Role"} Name`}
        placeholder={`Enter ${lob ? "LOB" : "Role"} Name`}
        type="text"
        name="name"
        value={formData.name}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableId ? false : true}
      />
      <SwitchComponent
        label="Status"
        onValue="Active"
        offValue="Inactive"
        name="status"
        value={formData.status}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableId ? false : true}
      />
      <CreatedDateComponent date="22/04/2022" isDisabled />
      <InputComponent
        type="date"
        label="Expiry Date"
        name="expiry_date"
        value={formData.expiry_date}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableId ? false : true}
      />
      <SubmitButton />
    </Form>
  );
};

export default RoleForm;
