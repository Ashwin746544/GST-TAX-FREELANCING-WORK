import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { Form, Col, Row, Button } from "react-bootstrap";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import {
  addUser,
  updateUser,
  deleteUser,
  getAllUser,
  getAllLOB,
  getAllRole,
} from "../../api/api";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useEffect, useState } from "react";
import MultipleSelectComponent from "../../components/MultipleSelectComponent/MultipleSelectComponent";
const UserForm = ({
  showData,
  currentEditableUserId,
  setCurrentEditableUserId,
  setFetchedData,
}) => {
  console.log("inside UserForm", currentEditableUserId);
  const [allRole, setAllRole] = useState([]);
  const [allLob, setAllLob] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    user_id: "",
    user_name: "",
    email_id: "",
    password: "kaushal",
    lob_code: "hkjfhfds",
    role_code: "fjhdskfsd",
    status: "",
    created_date: "2022-04-21",
    expiry_date: "2022-04-21",
  });
  // console.log(showData, formData);

  useEffect(() => {
    getAllRole().then((res) =>
      setAllRole(
        res.map((obj) => {
          return obj.roleCode;
        })
      )
    );
    getAllLOB().then((res) =>
      setAllLob(
        res.map((obj) => {
          return obj.lobCode;
        })
      )
    );
  }, []);

  useEffect(() => {
    setFormData({
      id: showData.id,
      user_id: showData.userId,
      user_name: showData.userName,
      email_id: showData.email,
      password: "kaushal",
      // lob_code: showData.lobCode,
      // role_code: showData.roleCode,
      lob_code: "lob100",
      role_code: "100",
      status: showData.status,
      created_date: "2022-04-21",
      expiry_date: "2022-04-21",
    });
  }, [showData]);

  const onChangeHandler = (name, value) => {
    console.log(name, value);
    setFormData((prev) => {
      console.log("form data", { ...prev, [name]: value });
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    if (currentEditableUserId && currentEditableUserId !== "add") {
      //Edit User
      console.log(formData);
      const response = await updateUser({
        email: formData.email_id,
        userId: formData.id,
        status: formData.status,
        roleCode: formData.role_code,
        lobCode: formData.lob_code,
        password: formData.password,
        userName: formData.user_name,
      });
      getAllUser().then((res) => setFetchedData(res));
      setCurrentEditableUserId(null);
      console.log("user Updated", response);
    } else {
      // Add User

      console.log(
        formData.email_id,
        formData.lob_code,
        formData.password,
        formData.role_code,
        formData.user_name,
        formData.status
      );
      const response = await addUser(
        formData.email_id,
        formData.lob_code,
        formData.password,
        formData.role_code,
        formData.user_name,
        formData.status
      );
      getAllUser().then((res) => setFetchedData(res));
      setCurrentEditableUserId(null);

      console.log("User Added", response);
    }
  };
  return (
    <Form onSubmit={submitHandler} className="UserForm">
      <InputComponent
        label="User ID"
        placeholder="Enter UserID..."
        type="text"
        name="user_id"
        value={formData.user_id}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <InputComponent
        label="User Name"
        placeholder="Enter Username..."
        type="text"
        name="user_name"
        value={formData.user_name}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <InputComponent
        label="Email ID"
        type="text"
        name="email_id"
        value={formData.email_id}
        placeholder="Enter EmailID..."
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <InputComponent
        label="Password"
        placeholder="Enter password..."
        name="password"
        value={formData.password}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      {/* <SelectComponent
        label="LOB Code"
        options={["LOB Code1", "LOB Code2", "LOB Code3"]}
        value={formData.lob_code}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      /> */}
      <MultipleSelectComponent
        name="lob_code"
        label="LOB Code"
        // options={["lob Code1", "Role Code2", "Role Code3"]}
        options={allLob}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      {/* <SelectComponent
        label="Role Code"
        options={["Role Code1", "Role Code2", "Role Code3"]}
        value={formData.role_code}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      /> */}
      <MultipleSelectComponent
        name="role_code"
        label="Role Code"
        // options={["Role Code1", "Role Code2", "Role Code3"]}
        options={allRole}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <SwitchComponent
        label="Status"
        name="status"
        value={formData.status}
        onValue="active"
        offValue="inactive"
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <CreatedDateComponent
        date="2022-04-21"
        value={formData.created_date}
        isDisabled
      />
      <InputComponent
        type="date"
        label="Expiry Date"
        name="expiry_date"
        value={formData.expiry_date}
        onChangeHandler={onChangeHandler}
        isDisabled={currentEditableUserId ? false : true}
      />
      <SubmitButton isDisabled={currentEditableUserId ? false : true} />
    </Form>
  );
};

export default UserForm;
