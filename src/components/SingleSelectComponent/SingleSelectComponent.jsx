import { Form } from "react-bootstrap";
import { useState } from "react";

const SingleSelectComponent = ({
  label,
  options,
  onChangeHandler,
  showSelectedValue,
  isDisabled,
  name,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOptionHandler = (event) => {
    setSelectedOption(event.target.value);
    onChangeHandler(name, event.target.value);
  };
  return (
    <Form.Group
      className="col-6 mb-3 pe-3 select-component"
      controlId="exampleForm.ControlInput5"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label="Select"
        htmlSize={1}
        onChange={selectOptionHandler}
        disabled={isDisabled}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
      {showSelectedValue && <div className="p-2">{selectedOption}</div>}
    </Form.Group>
  );
};

export default SingleSelectComponent;
