import React, { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../assets/Css/header.css"
import profilePic from "../assets/images/bit-profile.webp"

const Header = ()=>{
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };
  return(
  <Navbar expanded={expanded} onToggle={handleToggle} className="custom-head" variant="light" expand="md" sticky="top" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/" className="navbar-brand">
          <img
              src={profilePic}
              className="d-inline-block align-top profile-img"
              alt="React Bootstrap logo"
              loading="lazy"
            />
        <div className="brand-group">
          <span className="brand-name-up"> Samuel</span>
          <span className="brand-name-up"> Fasanya</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="ml-2">Menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink}  to="/" onClick={handleSelect}>Home</Nav.Link>
          <Nav.Link as={NavLink}  to="/who-i-am" onClick={handleSelect}>About</Nav.Link>
          <Nav.Link as={NavLink}  to="/skills-i-have" onClick={handleSelect}>Skills</Nav.Link>
          <Nav.Link as={NavLink} className="work-imp" to="/what-i-do" onClick={handleSelect}>Work</Nav.Link>
          <Nav.Link as={NavLink}  to="/contact-me" onClick={handleSelect}>Contact me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default Header;