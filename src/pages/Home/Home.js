import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Doctors from '../../components/Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;