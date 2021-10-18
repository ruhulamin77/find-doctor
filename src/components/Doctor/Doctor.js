import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, description, img } = props.doctor
    return (
        <Col className="single-doctor g-5">
            <Card className="p-2">
                <Card.Img variant="top border img" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button className="btn btn-outline-info" >BOOK NOW</button>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default Doctor;