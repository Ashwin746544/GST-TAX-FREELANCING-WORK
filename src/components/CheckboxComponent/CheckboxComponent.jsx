import React from "react";
import { Form } from "react-bootstrap";

const CheckboxComponent = ({}) => {
  return (
    <>
      <Form.Group className="d-flex align-items-center" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Includes Inactive"/>
      </Form.Group>
    </>
  );
};

export default CheckboxComponent;
