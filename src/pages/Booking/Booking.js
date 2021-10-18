import React from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { doctorId } = useParams()
    return (
        <div>
            <h1>Book Your Doctor {doctorId}</h1>
        </div>
    );
};

export default Booking;