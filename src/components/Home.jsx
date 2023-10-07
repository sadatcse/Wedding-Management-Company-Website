import React from 'react';
import Banner from './Banner/Banner';
import WelcomeMessage from './Section/WelcomeMessage';
import ServicesHighlights from './Section/ServicesHighlights';
import WhyChooseUs from './Section/WhyChooseUs';
import FreeConsultation from './Section/FreeConsultation';
import ServiceSucessOrganizer from './Section/ServiceSucessOrganizer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeMessage></WelcomeMessage>
            <ServicesHighlights></ServicesHighlights>
            <ServiceSucessOrganizer></ServiceSucessOrganizer>
            
            <WhyChooseUs></WhyChooseUs>
            <FreeConsultation></FreeConsultation>
        </div>
    );
};

export default Home;