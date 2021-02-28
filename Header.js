import React, {Component} from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';


function Header() {
  return (
    <div> 
        
    <Navbar bg="default" expand="lg">
    <Navbar.Brand href="#home"><img className="nav-img" src="https://www.autismsa.org.au/Media/Default/MarComm/asa_logo_Gif_2.gif"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="nav-text" href="#home">How does it work?</Nav.Link>
      <Nav.Link className="nav-text" href="#link">Pricing & Packages</Nav.Link>
      <Nav.Link className="nav-text" href="#link">Telehealth & ADS</Nav.Link>
      <Nav.Link className="nav-text" href="#link">Sign up</Nav.Link>
      <Nav.Link className="nav-text" href="#link">Download the app</Nav.Link>
      
    </Nav>
    
    </Navbar.Collapse>
    </Navbar>

    </div>
  );
}


export default Header;