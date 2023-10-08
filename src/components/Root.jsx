import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Allright from './Footer/Allright';
import Footer from './Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>
            <Allright></Allright>
        </div>
    );
};

export default Root;