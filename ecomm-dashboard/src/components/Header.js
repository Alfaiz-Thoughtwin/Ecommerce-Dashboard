import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Ecomm-Dashboard</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default Header;
