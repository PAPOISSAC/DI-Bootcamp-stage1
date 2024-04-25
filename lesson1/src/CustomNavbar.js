import React from 'react';
import { Navbar } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand href="/home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-between">
        <Navbar.Brand className="d-none d-lg-block" />
        <Navbar.Brand href="/logout">Logout</Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;