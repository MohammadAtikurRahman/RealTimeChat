import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../images/human.png';
import img1 from '../images/female.jpg';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

function Profile() {
  return (
    <Container>
   

      <Card>
      <Card.Header className="customCard ">Dotnet Chat</Card.Header>
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
   
            <Card.Title className=" p-1 m-1"  >
               
                
                 <img src={img} alt="logo" style={{ width: 50, height: 50 }}  />

                
                
                 Md. Atikur Rahman</Card.Title>

          </Card>
          <Card className=" mt-3">

              
          
            <Card.Title className=" p-1 m-1 " >
                
                 <img src={img1} alt="logo" style={{ width: 50, height: 50 }}  />
                
                Simi Tasneem Alam</Card.Title>

          </Card>
           

        </Col>
        
        <Col xs={12} md={8}>

           <p> Md. Atikur Rahman </p>


         <Card style={{ width: '44rem', height: '27rem' }}>
          <div >
          <img src={img1} alt="logo" style={{ width: 30, height: 30 }}></img> 
          <a  style={{fontSize: '18px' , backgroundColor: '#E2DFD2' }} className='float-left'  > Md. Atikur Rahman</a>
          <p className='ms-3'>Hello</p>


          </div>
         <div >
          <img src={img1} alt="logo" style={{ width: 30, height: 30 }} className='float-end'   ></img> 
          <a  style={{fontSize: '18px' , backgroundColor: '#E2DFD2' }}   className='float-end' > Md. Atikur Rahman</a>
           <br/>
          <p className=' ms-3  float-end me-3 ' >Hello</p>


          </div>
        

          </Card>
           <Card style={{ width: '44rem', height: '5rem' }} className='mt-3'>
            
           
            








                    
                    <InputGroup style={{ width: '44rem', height: '5rem' }}>
                                <Form.Control
                                placeholder="Your Massage"
                                />
                                
                                <Button variant="outline-primary">Send</Button>
                    </InputGroup>
        


          </Card>
        </Col>
       
      </Row>
     
      </Card.Body>
    </Card>




    </Container>
  );
}

export default Profile;