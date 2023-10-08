import React from 'react';
import './Section.css'
import { useDataContext } from '../../context/DataContext';
import Service from '../Page/Services/service';

const ServicesHighlights = () => {
const cardsData = useDataContext();

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-center items-center my-2">
            <h1 className="font-pacifico text-5xl text-blue-500 mb-4">Our Service</h1>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsData.slice(0, 3).map((card) => (
            <div key={card.serviceId} className="bg-white rounded-lg shadow-lg">
              <Service card={card} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-2">
      <button className="btn btn-warning">More Service</button>
    </div>
      </div>
        
    );
};

export default ServicesHighlights;