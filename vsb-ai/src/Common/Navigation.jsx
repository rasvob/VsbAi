import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: true
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
    render() {
        return (
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand as={Link} to="/">VŠB - AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/natural-gas-forecasting">Natural gas forecasting</Nav.Link>
                        <Nav.Link as={Link} to="/smart-harbour">Smart harbour</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
