import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./MultipleSelectComponent.css";
import { Form } from "react-bootstrap";

// const options = [
//   { label: "Grapes 🍇", value: "grapes" },
//   { label: "Mango 🥭", value: "mango" },
//   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
// ];

const MultipleSelectComponent = ({
  label,
  name,
  options,
  isDisabled,
  onChangeHandler,
}) => {
  const [selected, setSelected] = useState([]);
  const transformedOptions = options.map((option) => ({
    label: option,
    value: option,
  }));
  useEffect(() => {
    const tranformedSelected = selected.map((option) => option.label).join(",");
    onChangeHandler(name, tranformedSelected);
  }, [selected]);
  const deleteOptionHandler = (label) => {
    // const newOptions = [...selectedOptions.filter((opt) => opt !== option)];
    // setSelectedOptions(newOptions);
    const newSelected = selected.filter((option) => option.label !== label);
    setSelected(newSelected);
  };
  return (
    <div className="col-6 pe-3">
      <Form.Label>{label}</Form.Label>
      <MultiSelect
        options={transformedOptions}
        value={selected}
        disabled={isDisabled}
        onChange={setSelected}
        labelledBy="Select"
        className={isDisabled && "disableStyle"}
      />
      <div
        className="selected-options-container d-flex  pe-3 flex-wrap mt-3"
        style={{ gridGap: "10px" }}
      >
        {selected.map((option) => {
          return (
            <div key={option.label} className="selected-option">
              {option.label}
              <span
                className="ms-2 delete-option"
                onClick={() => deleteOptionHandler(option.label)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleSelectComponent;
