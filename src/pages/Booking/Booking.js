import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import SingleDoctor from '../../components/SingleDoctor/SingleDoctor';
import useAuth from '../../hooks/useAuth';


const Booking = () => {
    const { doctorId } = useParams()
    const { doctors } = useAuth();
    console.log(doctors);

    let selected = doctors.find(doctor => doctor.id == doctorId);


    return (
        <div className="App my-5">
            <h1 className="mb-5">Book Doctor <span className="text-info">{selected.name}</span></h1>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={selected.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{selected.name}</h5>
                            <p class="card-text">{selected.description}</p>
                            <p class="card-text"><small class="text-muted">Surgery is a medical or dental specialty that uses operative manual and instrumental techniques on a person to investigate or treat a pathological condition such as a disease or injury, to help improve bodily function, appearance, or to repair unwanted ruptured areas.</small></p>
                            <button className="btn btn-info">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Booking;