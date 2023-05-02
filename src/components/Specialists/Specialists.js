import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Specialists.css';

const Specialists = (props) => {
  const { name, description, img } = props.special;
  return (
    <div>
      <Col className="specialists">
        <Card className="p-2 specialists-card">
          <Card.Img variant="top  img" src={img} />
          <Card.Body>
            <b className="card-name">{name}</b>
            <Card.Text className="card-text">
              {description.slice(0, 150)}
            </Card.Text>
            <button className="btn-specialists">View More</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Specialists;
