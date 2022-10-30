import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar className='container mt-3 border rounded'  bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{marginRight:'25%'}} href="/">DeviFix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#Why_Devifix">Why Devifix</Nav.Link>
            <Nav.Link href="/#Platform">Platform</Nav.Link>
            <Nav.Link href="/#Solution">Solution</Nav.Link>
            <Nav.Link href="/#Price">Prices</Nav.Link>
            <Nav.Link  href="/#Resources">Resources</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
