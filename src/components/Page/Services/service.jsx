import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ card }) => {
    return (
        <div className="card card-compact w-96  shadow-xl">
        <figure><img className='h-56' src={card.image} alt={card.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{card.name} <div className="badge badge-secondary">NEW</div></h2>
          <p>{card.shortDescription}</p>
          <div className="flex card-actions justify-between">
            <div>
            <p className='font-mono hover:font-serif text-base	 font-semibold'>Price Range :{card.price}</p>
            </div>

            <div>
              <Link to={`/service/${card.serviceId}`} state={{ title: card.name }}><button style={{ backgroundColor: card.buttonColor }} className="btn">Details</button></Link>
            
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default Service;


