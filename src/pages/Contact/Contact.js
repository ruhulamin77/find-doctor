
import React from 'react';
import './Contact.css'
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <div className="contact-container row mx-3 my-5">
                    <div className="contact-img col-md-3">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="contact-form col-md-7 my-5">
                        <Form className="">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" aria-required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your comments/feedback write here</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" className="btn btn-warning">Submit</Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;