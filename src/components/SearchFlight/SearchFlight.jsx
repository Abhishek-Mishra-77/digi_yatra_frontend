import { FaSearch } from "react-icons/fa";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";
import Input from "../Inputs/Input";

const SearchFlight = () => {

    const flightDetails = [
        {
            id: 1,
            airportCode: "DEL",
            airportName: "Indira Gandhi International Airport",
            city: "New Delhi",
            location: "New Delhi",
        },
        {
            id: 2,
            airportCode: "BOM",
            airportName: "Chhatrapati Shivaji Maharaj International Airport",
            city: "Mumbai",
            location: "Maharashtra",
        },
        {
            id: 3,
            airportCode: "BLR",
            airportName: "Kempegowda International Airport",
            city: "Bangalore",
            location: "Karnataka",
        },
        {
            id: 4,
            airportCode: "MAA",
            airportName: "Chennai International Airport",
            city: "Chennai",
            location: "Tamil Nadu",
        },
        {
            id: 5,
            airportCode: "CCU",
            airportName: "Netaji Subhas Chandra Bose International Airport",
            city: "Kolkata",
            location: "West Bengal",
        },
        {
            id: 6,
            airportCode: "HYD",
            airportName: "Rajiv Gandhi International Airport",
            city: "Hyderabad",
            location: "Telangana",
        },
        {
            id: 7,
            airportCode: "BLR",
            airportName: "Kempegowda International Airport",
            city: "Bengaluru",
            location: "Karnataka",
        },
        {
            id: 8,
            airportCode: "COK",
            airportName: "Cochin International Airport",
            city: "Kochi",
            location: "Kerala",
        },
        {
            id: 9,
            airportCode: "PNQ",
            airportName: "Pune International Airport",
            city: "Pune",
            location: "Maharashtra",
        },
        {
            id: 10,
            airportCode: "GOI",
            airportName: "Goa International Airport",
            city: "Dabolim",
            location: "Goa",
        },
        {
            id: 11,
            airportCode: "ATQ",
            airportName: "Sri Guru Ram Dass Jee International Airport",
            city: "Amritsar",
            location: "Punjab",
        },
        {
            id: 12,
            airportCode: "TRV",
            airportName: "Thiruvananthapuram International Airport",
            city: "Thiruvananthapuram",
            location: "Kerala",
        },
        {
            id: 13,
            airportCode: "IXC",
            airportName: "Chandigarh International Airport",
            city: "Chandigarh",
            location: "Chandigarh",
        },
        {
            id: 14,
            airportCode: "IXB",
            airportName: "Bagdogra Airport",
            city: "Siliguri",
            location: "West Bengal",
        },
        {
            id: 15,
            airportCode: "IXA",
            airportName: "Agartala Airport",
            city: "Agartala",
            location: "Tripura",
        },
        {
            id: 16,
            airportCode: "IXR",
            airportName: "Ranchi Airport",
            city: "Ranchi",
            location: "Jharkhand",
        },
        {
            id: 17,
            airportCode: "IXT",
            airportName: "Tezpur Airport",
            city: "Tezpur",
            location: "Assam",
        },
        {
            id: 18,
            airportCode: "IXN",
            airportName: "Nalbari Airport",
            city: "Nalbari",
            location: "Assam",
        },
        {
            id: 19,
            airportCode: "JAI",
            airportName: "Jaipur International Airport",
            city: "Jaipur",
            location: "Rajasthan",
        },
        {
            id: 20,
            airportCode: "VDY",
            airportName: "Vadodara Airport",
            city: "Vadodara",
            location: "Gujarat",
        },
        {
            id: 21,
            airportCode: "GAYA",
            airportName: "Gaya Airport",
            city: "Gaya",
            location: "Bihar",
        },
    ];

    return (
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
                            <Input type="date" />
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
    )
}
export default SearchFlight;
