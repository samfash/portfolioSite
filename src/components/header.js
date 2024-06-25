import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../assets/Css/header.css"
import profilePic from "../assets/images/bit-profile.png"

const Header = ()=>{
  return(
  <Navbar bg="light" variant="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="/" className="navbar-brand">
          <img
              src={profilePic}
              className="d-inline-block align-top profile-img"
              alt="React Bootstrap logo"
            />
        <div className="brand-group">
          <span className="brand-name-up"> Samuel</span>
          <span className="brand-name-up"> Fasanya</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
              <Nav.Link as={NavLink}  to="/who-i-am">About</Nav.Link>
              <Nav.Link as={NavLink}  to="/skills-i-have">Skills</Nav.Link>
              <Nav.Link as={NavLink} className="work-imp" to="/what-i-do">Work</Nav.Link>
              <Nav.Link as={NavLink}  to="/contact-me">Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
export default Header;