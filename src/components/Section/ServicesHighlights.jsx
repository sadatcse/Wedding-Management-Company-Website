import React, { useEffect } from 'react';
import './Section.css'
import AOS from 'aos';

import Service from '../Page/Services/service';
import { Link } from 'react-router-dom';

const ServicesHighlights = ({cardsData}) => {

  useEffect(() => {
    AOS.init();
  }, []);


    return (
        <div className="container mx-auto py-8" data-aos="fade-left">
            <div className="flex justify-center items-center my-2">
            <h1 className="font-pacifico text-5xl text-blue-500 mb-4">Our Service</h1>
    </div>
        <div className="ms-5 grid grid-cols-1 md:grid-cols-3 gap-2">
          {cardsData.slice(0, 3).map((card) => (
            <div key={card.serviceId} className="rounded-lg">
              <Service card={card} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-2">
        <Link to="/service"><button className="btn btn-warning">More Service</button></Link> 
    </div>
      </div>
        
    );
};

export default ServicesHighlights;