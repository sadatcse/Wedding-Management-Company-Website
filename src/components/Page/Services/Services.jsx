import React, { useState } from 'react';
import '../../Section/Section.css';

import Service from './service';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const cardsData = useLoaderData();
    const [showAllData, setShowAllData] = useState(false);

    const maxCardsToShow = 6;

    const toggleShowAllData = () => {
        setShowAllData(!showAllData);
    };

    return (
        <div className="container mx-auto py-8">
            <div className='text-center mb-5'>
                <h1 className="text-3xl font-bold mb-4">Your Ultimate Wedding Planning Resource</h1>
                <p className="text-gray-600 m-5">Welcome to your one-stop destination for all your wedding planning needs! Our Comprehensive Wedding Services Page brings together everything you require to create your dream wedding. Discover a world of vendors, venues, inspiration, and expert advice, all in one place. Simplify your wedding journey and make your special day unforgettable with our trusted wedding planning resources.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cardsData.slice(0, showAllData ? cardsData.length : maxCardsToShow).map((card) => (
                    <div key={card.serviceId} className="ms-5 p-5">
                        <Service card={card} />
                    </div>
                ))}
            </div>
            {cardsData.length > maxCardsToShow && (
                <div className="flex justify-center items-center mt-4">
                    <button
                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700"
                        onClick={toggleShowAllData}
                    >
                        {showAllData ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;
