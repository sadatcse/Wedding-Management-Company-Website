import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {

    const FaqsData = useLoaderData();
    console.log(FaqsData);
    

    return (
        <div className="container mx-auto py-8">
            <h1 className="font-pacifico text-5xl text-blue-500 m-5 text-center">FAQ (Frequently Asked Questions) </h1>
            <p className='text-xl m-5 pt-5'>Thanks so much for finding us and taking the time to read more about our company!  Hopefully since you have made it this far, you realize we are not your typical type of destination wedding planners, as we plan S Wedding Planner in Bangladesh and luxury elopement EXPERIENCES.  We get countless inquiries from people around the world wanting to plan their weddings here, and frankly, we are not a good fit for most.  So please take a few minutes to make sure we would be a good fit for you by reading through the below!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FaqsData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;