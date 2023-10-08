import React from 'react';
import Banner from './Banner/Banner';
import WelcomeMessage from './Section/WelcomeMessage';
import ServicesHighlights from './Section/ServicesHighlights';
import WhyChooseUs from './Section/WhyChooseUs';
import FreeConsultation from './Section/FreeConsultation';
import ServiceSucessOrganizer from './Section/ServiceSucessOrganizer';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const cardsData = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <WelcomeMessage></WelcomeMessage>
            <ServicesHighlights cardsData={cardsData}></ServicesHighlights>
            <ServiceSucessOrganizer></ServiceSucessOrganizer>
            
            <WhyChooseUs></WhyChooseUs>
            <FreeConsultation></FreeConsultation>
        </div>
    );
};

export default Home;