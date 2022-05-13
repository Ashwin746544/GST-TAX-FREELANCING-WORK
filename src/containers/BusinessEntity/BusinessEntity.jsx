import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { Form, Col, Row, Button } from "react-bootstrap";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import SingleSelectComponent from "../../components/SingleSelectComponent/SingleSelectComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
const BusinessEntity = () => {
  const submitHandler = () => {
    console.log("Form Submitted!");
  };
  return (
    <Form onSubmit={submitHandler} className="BusinessEntity">
      <InputComponent
        label="Entity ID"
        placeholder="Enter EntityID..."
        type="text"
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Entity Legal Name"
        placeholder="Enter Entity LegalName..."
        type="text"
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Entity Short Name"
        placeholder="Enter Entity ShortName..."
        type="text"
        onChangeHandler={() => {}}
      />
      <SingleSelectComponent
        label="Home Country"
        options={["India", "America", "Canada"]}
      />
      <SwitchComponent label="Status" onValue="Active" offValue="inActive" />
      <InputComponent
        type="date"
        label="Entity Start FY"
        onChangeHandler={() => {}}
      />
      <InputComponent
        type="date"
        label="Entity End FY"
        onChangeHandler={() => {}}
      />
      <SingleSelectComponent
        label="Base Currency"
        options={["Rupee", "doller", "Pound"]}
      />
      <InputComponent
        label="Entity Host Name"
        type="text"
        placeholder="Enter Entity Host Name..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Entity Host Port"
        type="text"
        placeholder="Enter Entity Host Port..."
        onChangeHandler={() => {}}
      />
      <Form.Group
        className="mb-3 col-6 pe-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Entity Address</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <SingleSelectComponent
        label="Entity Type"
        options={["1", "2", "3"]}
        onChangeHandler={() => {}}
        showSelectedValue
      />
      <InputComponent
        label="Pin Code"
        type="text"
        placeholder="Enter Pin Code..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Entity State"
        type="text"
        placeholder="Enter Entity State..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Rating Agency"
        type="text"
        placeholder="Enter Rating Agency..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Rate"
        type="text"
        placeholder="Enter Rate..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Income Tax Identification Number"
        type="text"
        placeholder="Enter Income Tax ID..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="TDS/WHT Rate Applicable"
        type="text"
        placeholder="TDS/WHT..."
        onChangeHandler={() => {}}
      />
      <SubmitButton />
    </Form>
  );
};

export default BusinessEntity;
