import { Form, Row } from "react-bootstrap";

const CreatedDateComponent = ({ date,isDisabled }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column className="py-0 mb-2">
        Created Date
      </Form.Label>
      <p className="m-0">
        <Form.Control plaintext readOnly defaultValue={date} disabled={isDisabled}/>
      </p>
    </Form.Group>
  );
};

export default CreatedDateComponent;
