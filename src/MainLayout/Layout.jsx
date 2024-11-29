import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 lg:px-0'>
            <Navbar/>
           <Outlet></Outlet>
           <Footer/>
        </div>
    );
};

export default Layout;