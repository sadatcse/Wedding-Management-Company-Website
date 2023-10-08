import React from 'react';
import { Link } from 'react-router-dom';

const FreeConsultation = () => {
    return (
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 p-8 rounded-lg shadow-lg text-center">
            <div className="border-t-4 border-blue-600 border-b-4 border-blue-600 p-4 mb-6"></div>
            <h2 className="text-6xl font-bold text-black font-semibold">Your Perfect Event Begins Here</h2>
            <h1 className="text-5xl text-yellow-400 font-bold mt-4">FREE CONSULTATION</h1>
            <p className="text-lg text-black mt-4">
                Let Special Event Genie create the event of YOUR dreams.
            </p>
            <Link to="/contact"><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-6 py-2 mt-6 rounded-full transition duration-300">CONTACT US</button></Link>
            
            <div className="border-t-4 border-blue-600 border-b-4 border-blue-600 p-4 mt-6"></div>
        </div>
    );
};

export default FreeConsultation;
