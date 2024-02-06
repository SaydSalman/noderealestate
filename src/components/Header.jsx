import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Real Estate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/about'}>About</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/profile'}>Profile</Link></Nav.Link>
            
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Nav.Link href="#link"><Link style={{textDecoration:'none',color:'black'}} to={'/sign-in'}>SignIn</Link></Nav.Link>
      <Nav.Link href="#link"><Link style={{textDecoration:'none',color:'black'}} to={'/sign-up'}>Register</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
