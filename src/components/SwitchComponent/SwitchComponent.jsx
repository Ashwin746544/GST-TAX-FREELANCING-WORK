import { Form } from "react-bootstrap";
import { useState } from "react";

const SwitchComponent = ({
  label,
  onValue,
  offValue,
  name,
  value,
  onChangeHandler,
  isDisabled,
}) => {
  // const [currentValue, setCurrentValue] = useState(value);
  // console.log("switch value", value, currentValue);

  const SwitchChangeHandler = (event) => {
    // setCurrentValue(event.target.checked);
    onChangeHandler(name, event.target.checked);
  };
  return (
    <Form.Group className="switch-container mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Check
        type="switch"
        id="custom-switch"
        onChange={SwitchChangeHandler}
        // label={currentValue ? onValue : offValue}
        label={value ? onValue : offValue}
        disabled={isDisabled}
        checked={value}
      />
    </Form.Group>
  );
};

export default SwitchComponent;
