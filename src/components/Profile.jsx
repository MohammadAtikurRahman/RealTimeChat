import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../images/human.png';
import img1 from '../images/female.jpg';

function Profile() {
  return (
    <Container>
   

      <Card>
      <Card.Header>dotnet chat</Card.Header>
      <Card.Body>
            <Row>
        
                
                
         <Col xs={6} md={4}>
                    <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
          <Card className=" mt-3">
   
            <Card.Title className=" p-4 m-1"  >
               
                
                 <img src={img} alt="logo" style={{ width: 50, height: 50 }}  />

                
                
                 Md. Atikur Rahman</Card.Title>

          </Card>
          <Card className=" mt-3">

              
          
            <Card.Title className=" p-4 m-1 " >
                
                 <img src={img1} alt="logo" style={{ width: 50, height: 50 }}  />
                
                Simi Tasneem Alam</Card.Title>

          </Card>
                <Card className=" mt-3">

              
          
            <Card.Title className=" p-4 m-1 " >
                
                 <img src={img1} alt="logo" style={{ width: 50, height: 50 }}  />
                
                Simi Tasneem Alam</Card.Title>

          </Card>
             <Card className=" mt-3">

              
          
            <Card.Title className=" p-4 m-1 " >
                
                 <img src={img1} alt="logo" style={{ width: 50, height: 50 }}  />
                
                Simi Tasneem Alam</Card.Title>

          </Card>

        </Col>
        
        <Col xs={12} md={8}>
         <Card>


          </Card>
        </Col>
       
      </Row>
     
      </Card.Body>
    </Card>




    </Container>
  );
}

export default Profile;