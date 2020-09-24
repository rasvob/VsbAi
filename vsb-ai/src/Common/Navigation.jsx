import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";
import { NavDropdown,Form,FormControl, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import {
    Navbar,
    NavbarToggler,
    Nav,
    Collapse,
    NavItem } from 'react-bootstrap';


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
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand as={Link} to="/">VŠB - AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/natural-gas-forecasting">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
