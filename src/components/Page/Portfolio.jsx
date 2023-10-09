import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Portfolio = () => {
    const portfoliosData = useLoaderData();
    
    return (
        <div>
            <div className='text-center'>
                <p className='text-5xl text-blue-500 font-pacifico my-5'>PORTFOLIO</p>
                <p className='text-2xl'>Explore Our Stunning Portfolio of Memorable Events</p>
            </div>
            <div>
                <div className="container mx-auto mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portfoliosData.map((card, index) => (
                            <Link to={`/portfolio/${card.Serial}`} ><div key={card.Serial} className="relative bg-white shadow-md p-4">
                                <img
                                    src={card.BeautifulImages[0].URL}
                                    alt={`Card Image ${card.EventName}`}
                                    className="w-full h-48 object-cover object-center rounded-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-100">
                                    <h3 className="text-white text-lg font-semibold bg-blue-500 px-4 py-2 rounded-md">
                                        {card.EventName}
                                    </h3>
                                </div>
                            </div></Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
