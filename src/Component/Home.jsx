import React from 'react';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import ExploreFeatures from './ExploreFeatures';
import { Slide } from 'react-toastify';
import Slider from './Slider';

const Home = () => {
  
    return (
        <div>
         <Banner/>
         <Outlet/>
         <ExploreFeatures/>
         <Slider/>
        </div>
    );
};

export default Home;