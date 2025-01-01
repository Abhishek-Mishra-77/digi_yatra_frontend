import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const PassengerDetails = ({ setActiveTab }) => {
    const [capturedImages, setCapturedImages] = useState({
        person1: [],
        person2: []
    });

    const webcamRef1 = useRef(null);
    const webcamRef2 = useRef(null);

    const captureImage = (personKey) => {
        const webcamRef = personKey === 'person1' ? webcamRef1 : webcamRef2;
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImages((prevImages) => ({
            ...prevImages,
            [personKey]: [...prevImages[personKey], imageSrc]
        }));
    };

    return (
        <div className="flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl font-bold text-center mb-6 text-gradient">Enter Details</h1>

            {/* Person 1 Details */}
            <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl">
                <form className="w-full space-y-6">
                    <div className="flex flex-col space-y-6">
                        <div className="flex space-x-6">
                            <div className="flex-1">
                                <label htmlFor="first-name1" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                                <input
                                    id="first-name1"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="last-name1" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                                <input
                                    id="last-name1"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email1" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                            <input
                                id="email1"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                    </div>

                    {/* Webcam Section */}
                    <div className="mt-8">
                        <div className="bg-white p-4 rounded-lg shadow-xl mt-6">
                            <h2 className="text-xl font-semibold text-center text-black mb-4">Person 1 Webcam</h2>
                            <div className="flex justify-center items-center">
                                <Webcam
                                    ref={webcamRef1}
                                    screenshotFormat="image/jpeg"
                                    className="w-64 h-48 rounded-lg border border-gray-300"
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => captureImage('person1')}
                            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3 rounded-lg mt-4 hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
                        >
                            Capture Image
                        </button>

                        {/* Captured Images */}
                        <div className="flex justify-start space-x-2 mt-4">
                            {capturedImages.person1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`captured person1 ${index}`}
                                    className="w-16 h-16 rounded-md border border-gray-300"
                                />
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            {/* Person 2 Details */}
            <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl mt-8">
                <form className="w-full space-y-6">
                    <div className="flex flex-col space-y-6">
                        <div className="flex space-x-6">
                            <div className="flex-1">
                                <label htmlFor="first-name2" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                                <input
                                    id="first-name2"
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="last-name2" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                                <input
                                    id="last-name2"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email2" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                            <input
                                id="email2"
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                    </div>

                    {/* Webcam Section */}
                    <div className="mt-8">
                        <div className="bg-white p-4 rounded-lg shadow-xl mt-6">
                            <h2 className="text-xl font-semibold text-center text-black mb-4">Person 2 Webcam</h2>
                            <div className="flex justify-center items-center">
                                <Webcam
                                    ref={webcamRef2}
                                    screenshotFormat="image/jpeg"
                                    className="w-64 h-48 rounded-lg border border-gray-300"
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => captureImage('person2')}
                            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3 rounded-lg mt-4 hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
                        >
                            Capture Image
                        </button>

                        {/* Captured Images */}
                        <div className="flex justify-start space-x-2 mt-4">
                            {capturedImages.person2.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`captured person2 ${index}`}
                                    className="w-16 h-16 rounded-md border border-gray-300"
                                />
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-center space-x-3 hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
                >
                    <span>Submit</span>
                </button>
            </div>
        </div>
    );
};

export default PassengerDetails;
