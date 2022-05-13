import { Form } from "react-bootstrap";

const InputComponent = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChangeHandler,
  isDisabled,
}) => {
  return (
    <Form.Group
      className="col-6 mb-3 pe-3"
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value ? value : ""}
        disabled={isDisabled}
        onChange={(event) => onChangeHandler(name, event.target.value)}
      />
    </Form.Group>
  );
};

export default InputComponent;
