import { useState, useEffect } from "react";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import { Button, Form } from "react-bootstrap";
import InputComponent from "../../components/InputComponent/InputComponent";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import {
  addAction,
  getAllRole,
  getRoleByRoleCode,
  updateAction,
  getAllAction,
} from "../../api/api";
import SingleSelectComponent from "../../components/SingleSelectComponent/SingleSelectComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const ActionForm = ({
  showData,
  currentEditableActionId,
  setFetchedData,
  setCurrentEditableActionId,
}) => {
  console.log(showData);
  const initialFormValue = {
    action_code: "",
    action_name: "",
    action_status: true,
    role_code: "",
    role_name: "",
    role_status: false,
    canCreate: false,
    canUpdate: false,
    canDelete: false,
    canRead: false,
  };
  const [formData, setFormData] = useState(initialFormValue);
  const [allRole, setAllRole] = useState([]);
  console.log(showData, formData);

  useEffect(() => {
    getAllRole().then((res) =>
      setAllRole(
        res.map((obj) => {
          return obj.roleCode;
        })
      )
    );
  }, []);

  useEffect(() => {
    if (Object.keys(showData).length !== 0) {
      setFormData({
        action_code: showData.actionCode,
        action_name: showData.actionName,
        role_code: showData.roleModel.roleCode,
        canCreate: showData.canCreate,
        canUpdate: showData.canUpdate,
        canDelete: showData.canDelete,
        canRead: showData.canRead,
      });
    } else {
      setFormData(initialFormValue);
    }
  }, [showData]);

  const onChangeHandler = (name, value) => {
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
    if (name === "role_code") {
      getRoleByRoleCode(value).then((res) => {
        setFormData((prev) => {
          return {
            ...prev,
            role_name: res.roleName,
            role_status: res.status,
          };
        });
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    if (currentEditableActionId && currentEditableActionId !== "add") {
      //Edit User
      console.log("i am inside update data.");
      const response = await updateAction(
        currentEditableActionId,
        formData.action_code,
        formData.action_name,
        formData.canCreate,
        formData.canDelete,
        formData.canRead,
        formData.canUpdate,
        formData.role_code,
        formData.role_name,
        formData.role_status,
        formData.action_status
      );
      getAllAction().then((res) => setFetchedData(res));
      setCurrentEditableActionId(null);
      console.log("user Updated", response);
    } else {
      // Add action
      console.log("i am inside add data.");
      const response = await addAction(
        formData.action_code,
        formData.action_name,
        formData.canCreate,
        formData.canDelete,
        formData.canUpdate,
        formData.canRead,
        formData.role_code,
        formData.role_name,
        formData.role_status,
        formData.action_status
      );
      getAllAction().then((res) => setFetchedData(res));
      setCurrentEditableActionId(null);

      console.log("User Added", response);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="ActionForm">
      <InputComponent
        label="Action Code"
        placeholder="Enter Action Code"
        type="text"
        name="action_code"
        value={formData.action_code}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableActionId ? false : true}
      />
      <InputComponent
        label="Action Name"
        placeholder="Enter Action name..."
        type="text"
        name="action_name"
        value={formData.action_name}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableActionId ? false : true}
      />
      <SingleSelectComponent
        name="role_code"
        label="Role Code"
        options={allRole}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableActionId ? false : true}
      />
      <SwitchComponent
        label="Can Create?"
        name="canCreate"
        value={formData.canCreate}
        onChangeHandler={onChangeHandler}
        onValue="Yes"
        offValue="No"
        isDisabled={currentEditableActionId ? false : true}
      />
      <SwitchComponent
        label="Can Update?"
        name="canUpdate"
        value={formData.canUpdate}
        onChangeHandler={onChangeHandler}
        onValue="Yes"
        offValue="No"
        isDisabled={currentEditableActionId ? false : true}
      />
      <SwitchComponent
        label="Can Delete?"
        name="canDelete"
        value={formData.canDelete}
        onChangeHandler={onChangeHandler}
        onValue="Yes"
        offValue="No"
        isDisabled={currentEditableActionId ? false : true}
      />
      <SwitchComponent
        label="Can Read?"
        name="canRead"
        value={formData.canRead}
        onChangeHandler={onChangeHandler}
        onValue="Yes"
        offValue="No"
        isDisabled={currentEditableActionId ? false : true}
      />
      <SubmitButton />
    </Form>
  );
};

export default ActionForm;
