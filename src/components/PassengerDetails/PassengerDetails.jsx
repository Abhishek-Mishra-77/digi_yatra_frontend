const PassengerDetails = ({ setActiveTab }) => (
    <div className="flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gradient">Enter Details</h1>

        {/* Form for Person 1 Details */}
        <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl">
            <form className="w-full space-y-6">
                {/* Person 1 Section */}
                <div className="flex flex-col space-y-6">
                    <div className="flex space-x-6">
                        <div className="flex-1">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                            <input
                                id="first-name"
                                type="text"
                                placeholder="First Name"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                            <input
                                id="last-name"
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    {/* Webcam Section with Image */}
                    <div className="mt-8">
                        <div className="bg-white p-4 rounded-lg shadow-xl mt-6">
                            <h2 className="text-xl font-semibold text-center mb-4">Person 2 Webcam</h2>
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://vizuara-dot-ai.vercel.app/_next/image?url=%2Fimages%2Fdigiyatra%2Frotateface.gif&w=1920&q=75"
                                    alt="Webcam Animation"
                                    className="max-w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Person 2 Section */}
                <div className="flex flex-col space-y-6 mt-6">
                    <div className="flex space-x-6">
                        <div className="flex-1">
                            <label htmlFor="first-name-person2" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                            <input
                                id="first-name-person2"
                                type="text"
                                placeholder="First Name"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last-name-person2" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                            <input
                                id="last-name-person2"
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email-person2" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                        <input
                            id="email-person2"
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    {/* Webcam Section with Image */}
                    <div className="mt-8">
                        <div className="bg-white p-4 rounded-lg shadow-xl mt-6">
                            <h2 className="text-xl font-semibold text-center mb-4">Person 2 Webcam</h2>
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://vizuara-dot-ai.vercel.app/_next/image?url=%2Fimages%2Fdigiyatra%2Frotateface.gif&w=1920&q=75"
                                    alt="Webcam Animation"
                                    className="max-w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
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
            </form>
        </div>
    </div>
);

export default PassengerDetails;
