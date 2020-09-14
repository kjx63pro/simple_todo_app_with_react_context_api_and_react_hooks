import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  const toggle = () => {};
  return (
    <div>
      <Navbar bg='success' variant='dark' expand='sm' className='mb-5'>
        <Container>
          <Navbar.Brand href='#home'>React-Todo-App</Navbar.Brand>
          <Navbar.Toggle onClick={toggle}></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link href='#signup'>Sign Up</Nav.Link>
              <Nav.Link href='#login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
