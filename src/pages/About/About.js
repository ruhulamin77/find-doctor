import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import Specialists from '../../components/Specialists/Specialists';
import useAuth from '../../hooks/useAuth';

const About = () => {
  const { specialist } = useAuth();
  console.log(specialist);
  return (
    <div className="about-container m-5">
      <Container className="mb-5">
        <h3 className="choose-text pt-5 my-5">WE ARE SPECIALISTS IN</h3>
        <Row lg={4} md={2} xs={1} className="doctors-container ">
          {specialist?.map((special) => (
            <Specialists key={special.id} special={special}></Specialists>
          ))}
        </Row>
      </Container>
      <Container className="my-5 ">
        <Row lg={2} md={1} sm={1} xs={1} className="my-5 service-container p-5">
          <Col>
            <h3 className="service-text mb-5">OUR SERVICES RANGE</h3>
            <p>
              Surgery is a medical or dental specialty that uses operative
              manual and instrumental techniques on a person to investigate or
              treat a pathological condition such as a disease or injury, to
              help improve bodily function, appearance, or to repair unwanted
              ruptured areas
            </p>
            <button className="btn-specialists mb-5">Vie More</button>
          </Col>
          <Col className="price-container p-3">
            <Row className="align-items-center">
              <Col md={8} sm={12}>
                <h5>MAKEUP & COSMETICS</h5>
                <p>
                  A "cosmetic" is any substance used to clean, improve or change
                  the complexion, skin, hair, nails or teeth.
                </p>
              </Col>
              <Col>
                <h3 className="price-text">$35.00</h3>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center">
              <Col md={8} sm={12}>
                <h5>PERFUMES</h5>
                <p>
                  Perfume is a mixture of fragrant essential oils or aroma
                  compounds, fixatives and solvents, usually in liquid form,
                  used to give the human body, animals, food, objects, and
                  living-spaces an agreeable scent.
                </p>
              </Col>
              <Col>
                <h3 className="price-text">$42.00</h3>
              </Col>
              <Col></Col>
            </Row>
            <hr />
            <Row className="align-items-center">
              <Col md={8} sm={12}>
                <h5>SKINCARE</h5>
                <p>
                  Skin care is the range of practices that support skin
                  integrity, enhance its appearance and relieve skin conditions.
                  They can include nutrition, avoidance of excessive sun
                  exposure and appropriate use of emollients.
                </p>
              </Col>
              <Col>
                <h3 className="price-text">$18.00</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
