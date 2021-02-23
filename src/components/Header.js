/* eslint-disable no-shadow */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/authActions';

const Header = ({ user, logout }) => {
    let navbar = null;
    if (user.userId) {
        navbar = (
            <Container>
                <Navbar.Brand style={{ color: 'coral' }} href="/">
                    <h3>PhotoGallery</h3>
                </Navbar.Brand>
                <Navbar.Text as="h5">Login as: {user.name}</Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse style={{ maxWidth: '200px' }} id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="header_nav_link" exact to="/">
                            Home
                        </NavLink>
                        <NavLink onClick={logout} className="header_nav_link" to="/logout">
                            Logout
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        );
    } else {
        navbar = (
            <Container>
                <Navbar.Brand style={{ color: 'coral' }} href="/">
                    <h3>PhotoGallery</h3>
                </Navbar.Brand>
                <Navbar.Text className="mx-auto">
                    Please Login/SignUp to proceed PhotoGallery
                </Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse style={{ maxWidth: '200px' }} id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="header_nav_link" to="/login">
                            Login
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        );
    }
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            {navbar}
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
