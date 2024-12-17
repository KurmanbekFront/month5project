import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <Navbar br="ligth" expand="lg" className='justify-content-center'>
        <Navbar.Brand href="/">5 api</Navbar.Brand>
        <Nav className='mr-auto'>
            {/* <Nav.Link as={NavLink} to="/cats">Random Cats</Nav.Link>
            <Nav.Link as={NavLink} to="/jokes">Jokes</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link> */}
            <Nav.Link as={NavLink} to="/catfact">Cat fact</Nav.Link>
            <Nav.Link as={NavLink} to="/dogs">Random dog</Nav.Link>
            <Nav.Link as={NavLink} to="/randomuser">Random user</Nav.Link>
            <Nav.Link as={NavLink} to="/quote">Random quote</Nav.Link>
            <Nav.Link as={NavLink} to="/extinctanimal">Extinct animal</Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default AppNavBar;