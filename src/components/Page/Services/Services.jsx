import React, { useState } from 'react';
import { useDataContext } from "../../../context/DataContext";
import '../../Section/Section.css';

import Service from './service';

const Services = () => {
    const cardsData = useDataContext();
    const [showAllData, setShowAllData] = useState(false);

    // Set the maximum number of cards to show initially (6 in this case)
    const maxCardsToShow = 6;

    const toggleShowAllData = () => {
        setShowAllData(!showAllData);
    };

    return (
        <div className="another-container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cardsData.slice(0, showAllData ? cardsData.length : maxCardsToShow).map((card) => (
                    <div key={card.serviceId} className="">
                        <Service card={card} />
                    </div>
                ))}
            </div>
            {cardsData.length > maxCardsToShow && (
                <div className="flex justify-center items-center mt-2">
                    <button className="btn btn-outline glass btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={toggleShowAllData}>
                        {showAllData ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;


