
import { getAuth, signOut } from '@firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const Header = () => {
    const { user, logOut, isLogin } = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>

                    <Nav.Link as={Link} to="/home"><img src={logo} alt="" /></Nav.Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Countact</Nav.Link>

                        {user?.email ? <Button onClick={logOut} variant="secondary" size="sm" className="mx-3">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            {user?.email && `Signed in as:`} <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div >
    );
};

export default Header;