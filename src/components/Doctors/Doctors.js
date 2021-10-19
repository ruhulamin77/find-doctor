import React, { useEffect, useState } from 'react';
import './Doctors.css'
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import useAuth from '../../hooks/useAuth';


const Doctors = () => {
    const { doctors } = useAuth()
    return (
        <Container className="my-5">
            <h2 className="choose-text my-5">CHOOSE YOUR COSMETICS SPECIALIST</h2>

            <Row lg={3} md={2} xs={1} className="doctors-container g-5">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;