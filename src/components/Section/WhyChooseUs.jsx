import React from 'react';

const WhyChooseUs = () => {
  const bulletPoints = [
    "Bring Your Dream Wedding Vision to Life",
    "Manage Your Budget",
    "Problem Solving Pros",
    "Ensure No Key Detail is Overlooked",
    "Ensuring You Stay On Track",
    "Take Away Unwanted Stress",
    "Timeline Professionals",
    "Let Your Friends and Family Enjoy Your Wedding Day with You"
  ];

  return (
    <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
        <div>
          <img
            className='max-w-md rounded-lg shadow-lg'
            src='https://i.ibb.co/ZH552Ly/379843780-686202340209248-838506377395324954-n.jpg'
            alt='Wedding Planner'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold underline mb-4'>Why Choose Us</h1>
          <ul className='list-disc pl-5 text-gray-600'>
            {bulletPoints.map((point, index) => (
              <li key={index} className='mb-2'>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
