import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Signup() {
  return (

    <Card style={{ width: '28rem' }}>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"   placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    {/* <Form.Label>Fisrt Name</Form.Label>
                    <Form.Control type="input"   placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input"   placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text> */}
                     <Row>
                        <Col>    
                                <Form.Label>Fisrt Name</Form.Label>
                                <Form.Control placeholder="First name" />
                                <Form.Text className="text-muted"></Form.Text>
                        </Col>
                        <Col>    
                                 <Form.Label>Last Name</Form.Label>
                                 <Form.Control placeholder="Last name" />
                                 <Form.Text className="text-muted"></Form.Text>
                        </Col>
                    </Row>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
               
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" style={{fontSize: '16px'}} label="Remember me" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>



        </Card.Body>

 


    </Card>
  
  );
}

export default Signup;