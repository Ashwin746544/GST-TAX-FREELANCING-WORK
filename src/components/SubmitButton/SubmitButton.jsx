import { Button } from "react-bootstrap";

const SubmitButton = ({ isDisabled }) => {
  return (
    <Button
      className="UserForm-submit"
      type="submit"
      variant="primary"
      disabled={isDisabled}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
