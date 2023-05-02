import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
  const { name, description, img, id } = props.doctor;
  return (
    <div>
      <Col className="single-doctor g-5">
        <Card className="">
          <Card.Img variant="top img mb-2" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/booking/${id}`}>
              <button className="btn-book">BOOK NOW</button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
