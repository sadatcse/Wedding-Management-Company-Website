import React from 'react';
import Banner from './Banner/Banner';
import WelcomeMessage from './Section/WelcomeMessage';
import ServicesHighlights from './Section/ServicesHighlights';
import WhyChooseUs from './Section/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeMessage></WelcomeMessage>
            <ServicesHighlights></ServicesHighlights>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;