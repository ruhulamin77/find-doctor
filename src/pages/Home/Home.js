import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Doctors from '../../components/Doctors/Doctors';
import Specialists from '../../components/Specialists/Specialists';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <hr />
            <About></About>
            <hr />
        </div>
    );
};

export default Home;