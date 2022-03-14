 import React from 'react'
 import { Navbar, Nav, Container, Row } from 'react-bootstrap'
 import perfume from './perfume.png'
 import { LinkContainer } from 'react-router-bootstrap'

 function Header() {
   return (
     <div>
         <header>
         <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container>
  <img src={perfume} width="50" height="50"/>
  
    <LinkContainer to='/'>
      <Navbar.Brand href="/">The Scent Studio</Navbar.Brand>
    </LinkContainer>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

      <LinkContainer to='/cart'>
        <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
      </LinkContainer>

      <LinkContainer to='/login'>
        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
      </LinkContainer>

      </Nav>
    </Navbar.Collapse> 
  </Container>
</Navbar>
         </header>
     </div>
   )
 }
 
 export default Header