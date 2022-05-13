import { Form } from "react-bootstrap";
import { useState } from "react";

const SelectComponent = ({ label, options, onChangeHandler,isDisabled }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const selectChangeHandler = (event) => {
    const options = [...event.target.options]
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedOptions(options);
  };
  const deleteOptionHandler = (option) => {
    const newOptions = [...selectedOptions.filter((opt) => opt !== option)];
    setSelectedOptions(newOptions);
  };
  return (
    <>
      <Form.Group
        className="col-6 mb-3 pe-3 select-component"
        controlId="exampleForm.ControlInput5"
      >
        <Form.Label>{label}</Form.Label>
        <Form.Select
          aria-label="Select"
          htmlSize={1}
          onChange={selectChangeHandler}
          multiple
          disabled={isDisabled}
        >
          <option >Select</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <div
        className="selected-options-container d-flex col-6 pe-3 flex-wrap"
        style={{ gridGap: "10px" }}
      >
        {selectedOptions.map((option) => {
          if (option === "Select") {
            return null;
          }
          return (
            <div key={option} className="selected-option">
              {option}
              <span
                className="ms-2 delete-option"
                onClick={() => deleteOptionHandler(option)}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectComponent;
