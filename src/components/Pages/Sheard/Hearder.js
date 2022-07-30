import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Hearder = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <img
              src="https://th.bing.com/th/id/OIP.O_sRkk3XjO3MMxD1ratWIgHaHa?pid=ImgDet&rs=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/Expert">Expert</Nav.Link>
            <Nav.Link href="/AddNewService">Add New Service</Nav.Link>
            <Nav.Link href="/About" className='ms-auto'>About</Nav.Link>
            <Nav.Link href="/Login" className='d-flex'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Hearder;