import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl text-blue-500 font-pacifico mb-8 text-center">Contact Us</h1>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.180600509087!2d90.35291753291003!3d23.776582372446114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696793944914!5m2!1sen!2sbd" 
                    width="600" height="450">

                    </iframe>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Office Address</h3>
                                <p>Your Office Address Here</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Phone Numbers</h3>
                                <p>Main Phone: Your Main Phone Number</p>
                                <p>Mobile: Your Mobile Number</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Email</h3>
                                <p>Your Email Address</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Hotline Number</h3>
                                <p>16222</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
