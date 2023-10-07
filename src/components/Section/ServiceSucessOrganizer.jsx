import React from 'react';
import { FaUsers, FaCheckCircle, FaUsersCog } from 'react-icons/fa'; 
import moment from 'moment';


const ServiceSucessOrganizer = () => {
    const currentDate = moment().format('LL'); // 

    return (
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 p-8 rounded-lg shadow-lg ">
            <div className="flex justify-between divide-x divide-dashed hover:divide-solid">
            {/* Service Providers */}
            <div className="text-center w-1/3 px-1 flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                    <FaUsers className="text-blue-500 text-5xl" />
                </div>
                <h1 className='text-7xl text-red-400	'>245</h1> 
                <h2 className="text-2xl text-blue-600">Service Providers</h2>
            </div>

            {/* Success Events */}
            <div className="text-center w-1/3 px-1 flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                    <FaCheckCircle className="text-green-500 text-5xl" />
                </div>
                <h1 className='text-7xl text-red-400	'>360</h1> 
                <h2 className="text-2xl text-green-600">Success Events</h2>
            </div>

            {/* Events Organizers */}
            <div className="text-center w-1/3 px-1 flex flex-col items-center">
                <div className="bg-yellow-100 rounded-full p-4 mb-4">
                    <FaUsersCog className="text-yellow-500 text-5xl" />
                </div>
                <h1 className='text-7xl text-red-400	'>501</h1> 
                <h2 className="text-2xl text-yellow-600">Events Organizers</h2>
            </div>
        </div>

        <p className="text-center text-gray-700 mt-6">Last updated on {currentDate}</p>

        
    </div>
);
};

export default ServiceSucessOrganizer;
