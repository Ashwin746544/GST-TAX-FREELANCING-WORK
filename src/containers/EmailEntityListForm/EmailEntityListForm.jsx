import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const EmailEntityListForm = () => {
  return (
    <div className="EmailEntityListForm">
      <InputComponent
        label="Email"
        type="text"
        placeholder="Enter Email..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Salutation"
        type="text"
        placeholder="Enter Salutation..."
        onChangeHandler={() => {}}
      />
      <SelectComponent
        label="LOB Code"
        options={["LOB Code1", "LOB Code2", "LOB Code3"]}
        onChangeHandler={() => {}}
      />
      <SwitchComponent label="Status" onValue="Active" offValue="inActive" />
      <SwitchComponent label="Claim" onValue="Yes" offValue="No" />
      <SwitchComponent label="UnderWriting" onValue="Yes" offValue="No" />
      <SwitchComponent label="Accounting" onValue="Yes" offValue="No" />
      <CreatedDateComponent date="01/03/2022" />
      <SubmitButton />
    </div>
  );
};

export default EmailEntityListForm;
