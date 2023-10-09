import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const DetailsPortfolio = () => {

    const protfolios = useLoaderData();

  const { id } = useParams();

  const protfolio = protfolios.find((protfolio) => protfolio.Serial == parseInt(id));
  const { Serial, EventName, Venue, Date} = protfolio || {};
  console.log(protfolio.BeautifulImages[1].URL);


    return (
        <div>
<div className='text-center'>
            <h1 className="text-6xl text-green-500 font-pacifico mb-3 mt-8 text-center">{EventName}-{Serial}</h1>
            <h1 className='text-4xl text-red-200'>Venue:{Venue}</h1>
            

        </div>

        <div className='mt-8'>
                <div className="flex">

      <div className="w-1/2 me-3 h-auto">
        <img src={protfolio.BeautifulImages[1].URL} alt="Image 1" className="w-full h-auto"></img>
      </div>

      <div className="w-1/2">
        <div className="flex flex-col space-y-4 h-auto">
        <img src={protfolio.BeautifulImages[2].URL} alt="Image 1" className="w-full"></img>
        <img src={protfolio.BeautifulImages[3].URL} alt="Image 1" className="w-full"></img>
        </div>
      </div>
    </div>
        </div>
        <p className='text-4xl text-center my-8'>Date of Programmer :{Date}</p>
        </div>
        
    );
};

export default DetailsPortfolio;