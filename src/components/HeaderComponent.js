import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <Navbar> 
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link" to='/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/care'>Care</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/store'>Store</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/events'>Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/mailingList'>Mailing List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'>About</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;