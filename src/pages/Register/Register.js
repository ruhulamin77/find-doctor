import Button from '@restart/ui/esm/Button';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, success, user, handleNameChange } = useAuth()


    return (
        <Container>
            <div className="register-container my-5">
                <div>
                    <h3>Please Register</h3>
                    <form onSubmit={handleRegistration} className="register-form">
                        <input type="text" placeholder="Enter your name" onBlur={handleNameChange} />
                        <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                        <input type="submit" value="Register" />
                    </form>
                    <p>Already have an account? <Link to="/login">Please login</Link></p>
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}
                    ---------or----------
                    <br />
                    <button onClick={signInUsingGoogle} className="btn btn-outline-info">Sign in with google</button>
                </div>
            </div>


            {/* <Form onSubmit={handleRegistration} className="w-50">
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <p>{error}</p>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form> */}
        </Container>
    );
};

export default Register;