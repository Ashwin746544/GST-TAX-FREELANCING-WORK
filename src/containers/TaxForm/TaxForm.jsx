import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import SwitchComponent from "../../components/SwitchComponent/SwitchComponent";
import CreatedDateComponent from "../../components/CreatedDateComponent/CreatedDateComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const TaxForm = () => {
  return (
    <div className="TaxForm">
      <InputComponent
        label="Tax Name"
        type="text"
        placeholder="Enter Taxname..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Reg No"
        type="text"
        placeholder="Enter Reg No..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Rate"
        type="number"
        placeholder="Enter Rate..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="TDS/WTH Tax"
        type="number"
        placeholder="Enter Tax..."
        onChangeHandler={() => {}}
      />
      <InputComponent
        label="Calculation ID"
        type="text"
        placeholder="Enter Calculation ID..."
        onChangeHandler={() => {}}
      />
      <p className="col-6 text-end text-primary pe-3">
        <small>Create New Calculation Method</small>
      </p>
      <SwitchComponent
        label="Is TDS_WTH Req"
        onValue="Active"
        offValue="Inactive"
      />
      <SwitchComponent
        label="Is Tax Under Rev Charge?"
        onValue="Yes"
        offValue="No"
      />
      <SwitchComponent label="Accounting" onValue="Yes" offValue="No" />
      <SwitchComponent
        label="Is Negative"
        onValue="Active"
        offValue="Inactive"
      />
      <SubmitButton />
    </div>
  );
};

export default TaxForm;
