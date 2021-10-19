import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Specialists.css'
import { Link } from 'react-router-dom';

const Specialists = (props) => {
    const { name, description, img, id } = props.special
    return (
        <div>
            <Col className="single-doctor g-5">
                <Card className="p-2 card">
                    <Card.Img variant="top border img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 50)}
                        </Card.Text>
                        <button className="btn btn-warning" >View More</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Specialists;