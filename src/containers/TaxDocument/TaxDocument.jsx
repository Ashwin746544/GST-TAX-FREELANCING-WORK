import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const TaxDocument = () => {
  return (
    <div className="TaxForm">
      <InputComponent
        label="Document Name"
        type="text"
        placeholder="Enter DocumentName..."
        onChangeHandler={() => {}}
      />
      <SwitchComponent label="Is Required?" onValue="Yes" offValue="No" />
      <InputComponent
        type="date"
        label="Start Date"
        onChangeHandler={() => {}}
      />
      <InputComponent type="date" label="End Date" onChangeHandler={() => {}} />
      <SubmitButton />
    </div>
  );
};

export default TaxDocument;
