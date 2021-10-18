import React, { useEffect, useState } from 'react';
import './Doctors.css'
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';



const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    for (const dr of doctors) {
        console.log(dr);
    }

    return (
        <Container className="my-5">
            <h2 className="choose-text mt-5">CHOOSE YOUR COSMETICS SPECIALIST</h2>
            <h4></h4>
            <Row lg={3} md={2} xs={1} gap={3} className="doctors-container ">
                {
                    doctors?.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;