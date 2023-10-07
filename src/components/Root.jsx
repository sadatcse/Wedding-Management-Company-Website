import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Allright from './Footer/Allright';
import Footer from './Footer/Footer';
import { ToastContainer} from 'react-toastify';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
            <Allright></Allright>
        </div>
    );
};

export default Root;