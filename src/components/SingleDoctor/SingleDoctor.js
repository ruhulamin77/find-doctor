import React from 'react';

const SingleDoctor = (props) => {
    const { doctor } = props.doctor
    return (
        <div>
            <img src={doctor} alt="" />
        </div>
    );
};

export default SingleDoctor;