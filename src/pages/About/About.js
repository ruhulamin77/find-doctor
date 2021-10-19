import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Specialists from '../../components/Specialists/Specialists';
import useAuth from '../../hooks/useAuth';

const About = () => {
    const { specialist } = useAuth()
    console.log(specialist);
    return (
        <Container className="my-5">

            <Row className="my-5 ">
                <h2 className="choose-text ">WE ARE SPECIALISTS IN</h2>

                <Row lg={3} md={2} xs={1} className="doctors-container g-5">
                    {
                        specialist?.map(special => <Specialists
                            key={special.id}
                            special={special}></Specialists>)
                    }
                </Row>
            </Row>
            <hr />
            <Row className="my-5">
                <Col >
                    <h2 className="text-warning mb-5">OUR SERVICES RANGE</h2>
                    <p>
                        Surgery is a medical or dental specialty that uses operative manual and instrumental techniques on a person to investigate or treat a pathological condition such as a disease or injury, to help improve bodily function, appearance, or to repair unwanted ruptured areas
                    </p>
                </Col>
                <Col>

                    <Row className="d-flex text-justify">
                        <Col md={8} sm={12}>
                            <h4><h5>MAKEUP & COSMETICS</h5></h4>
                            <p>A "cosmetic" is any substance used to clean, improve or change the complexion, skin, hair, nails or teeth.</p>
                        </Col>
                        <Col>
                            <h3 className="text-warning">$35.00</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={8} sm={12}>
                            <h4><h5>PERFUMES</h5></h4>
                            <p>Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.</p>
                        </Col>
                        <Col>
                            <h3 className="text-warning">$42.00</h3>
                        </Col>
                        <Col></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={8} sm={12}>
                            <h4><h5>SKINCARE</h5></h4>
                            <p>Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. They can include nutrition, avoidance of excessive sun exposure and appropriate use of emollients.</p>
                        </Col>
                        <Col>
                            <h3 className="text-warning">$18.00</h3>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    );
};

export default About;