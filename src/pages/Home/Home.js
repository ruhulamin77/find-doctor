import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import About from '../About/About';
import Grab from '../../components/Grab/Grab';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Doctors></Doctors>
      <About></About>
      <Grab></Grab>
    </div>
  );
};

export default Home;
