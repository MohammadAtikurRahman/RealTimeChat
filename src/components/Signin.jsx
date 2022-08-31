import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
function Signin() {
  return (
    <Card style={{ width: "28rem" }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              style={{ fontSize: "16px" }}
              label="Remember me"
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Signin;
