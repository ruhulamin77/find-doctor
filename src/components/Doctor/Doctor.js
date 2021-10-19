import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Doctor = (props) => {
    const { name, description, img, id } = props.doctor
    return (
        <div>
            <Col className="single-doctor g-5">
                <Card className="p-2">
                    <Card.Img variant="top border img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${id}`}>
                            <button className="btn btn-outline-info" >BOOK NOW</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>



    );
};

export default Doctor;