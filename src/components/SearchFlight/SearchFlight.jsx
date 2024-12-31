import { FaSearch } from "react-icons/fa";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";  // For the From, To, and Date icons
import Input from "../Inputs/Input";

const SearchFlight = () => (
    <div className="flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gradient">Search Flight</h1>
        <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl">
            <form className="w-full space-y-6">
                <div className="flex flex-wrap space-x-6 justify-between">
                    {/* From Input */}
                    <div className="flex-1">
                        <label htmlFor="from" className="block text-sm font-medium text-gray-900 mb-2">From</label>
                        <div className="relative">
                            <Input type="text" id="from" placeholder="From" />
                            <FaPlaneDeparture className="absolute left-4 top-4 text-gray-500 transition-transform duration-300 group-hover:text-pink-500" />
                        </div>
                    </div>

                    {/* To Input */}
                    <div className="flex-1">
                        <label htmlFor="to" className="block text-sm font-medium text-gray-900 mb-2">To</label>
                        <div className="relative">
                            <Input type="text" id="to" placeholder="To" />
                            <FaPlaneArrival className="absolute left-4 top-4 text-gray-500 transition-transform duration-300 group-hover:text-pink-500" />
                        </div>
                    </div>
                </div>

                {/* Date Input */}
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">Date</label>
                    <div className="relative">
                        <Input type="date" id="date" placeholder="Date" />
                        <FaCalendarAlt className="absolute left-4 top-4 text-gray-500 transition-transform duration-300 group-hover:text-pink-500" />
                    </div>
                </div>

                {/* Search Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-center space-x-3 hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
                    >
                        <FaSearch />
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default SearchFlight;
