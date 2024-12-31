import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";

const SearchFlight = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [showFromList, setShowFromList] = useState(false);
    const [showToList, setShowToList] = useState(false);
    const [filteredFromAirports, setFilteredFromAirports] = useState([]);
    const [filteredToAirports, setFilteredToAirports] = useState([]);

    const flightDetails = [
        { id: 1, airportCode: "DEL", airportName: "Indira Gandhi International Airport", city: "New Delhi", location: "New Delhi" },
        { id: 2, airportCode: "BOM", airportName: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", location: "Maharashtra" },
        { id: 3, airportCode: "BLR", airportName: "Kempegowda International Airport", city: "Bangalore", location: "Karnataka" },
        { id: 4, airportCode: "MAA", airportName: "Chennai International Airport", city: "Chennai", location: "Tamil Nadu" },
        { id: 5, airportCode: "CCU", airportName: "Netaji Subhas Chandra Bose International Airport", city: "Kolkata", location: "West Bengal" },
        { id: 6, airportCode: "HYD", airportName: "Rajiv Gandhi International Airport", city: "Hyderabad", location: "Telangana" },
        { id: 7, airportCode: "BLR", airportName: "Kempegowda International Airport", city: "Bengaluru", location: "Karnataka" },
        { id: 8, airportCode: "COK", airportName: "Cochin International Airport", city: "Kochi", location: "Kerala" },
        { id: 9, airportCode: "PNQ", airportName: "Pune International Airport", city: "Pune", location: "Maharashtra" },
        { id: 10, airportCode: "GOI", airportName: "Goa International Airport", city: "Dabolim", location: "Goa" },
        { id: 11, airportCode: "ATQ", airportName: "Sri Guru Ram Dass Jee International Airport", city: "Amritsar", location: "Punjab" },
        { id: 12, airportCode: "TRV", airportName: "Thiruvananthapuram International Airport", city: "Thiruvananthapuram", location: "Kerala" },
        { id: 13, airportCode: "IXC", airportName: "Chandigarh International Airport", city: "Chandigarh", location: "Chandigarh" },
        { id: 14, airportCode: "IXB", airportName: "Bagdogra Airport", city: "Siliguri", location: "West Bengal" },
        { id: 15, airportCode: "IXA", airportName: "Agartala Airport", city: "Agartala", location: "Tripura" },
        { id: 16, airportCode: "IXR", airportName: "Ranchi Airport", city: "Ranchi", location: "Jharkhand" },
        { id: 17, airportCode: "IXT", airportName: "Tezpur Airport", city: "Tezpur", location: "Assam" },
        { id: 18, airportCode: "IXN", airportName: "Nalbari Airport", city: "Nalbari", location: "Assam" },
        { id: 19, airportCode: "JAI", airportName: "Jaipur International Airport", city: "Jaipur", location: "Rajasthan" },
        { id: 20, airportCode: "VDY", airportName: "Vadodara Airport", city: "Vadodara", location: "Gujarat" },
        { id: 21, airportCode: "GAYA", airportName: "Gaya Airport", city: "Gaya", location: "Bihar" },
    ];

    const handleFromInputChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        setShowFromList(true);
        setFilteredFromAirports(
            flightDetails.filter(
                (airport) => airport.city.toLowerCase().includes(value.toLowerCase()) || airport.airportCode.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleToInputChange = (e) => {
        const value = e.target.value;
        setTo(value);
        setShowToList(true);
        setFilteredToAirports(
            flightDetails.filter(
                (airport) => airport.city.toLowerCase().includes(value.toLowerCase()) || airport.airportCode.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleSelectAirport = (airport, type) => {
        if (type === "from") {
            setFrom(airport.airportCode);
            setShowFromList(false);
        } else {
            setTo(airport.airportCode);
            setShowToList(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(`Searching flights from ${from} to ${to}`);
    };

    return (
        <div className="flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl font-bold text-center mb-6 text-gradient">Search Flight</h1>
            <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl">
                <form className="w-full space-y-6" onSubmit={handleSearch}>
                    <div className="flex flex-wrap space-x-6 justify-between">
                        {/* From Input */}
                        <div className="flex-1 relative">
                            <label htmlFor="from" className="block text-sm font-medium text-gray-900 mb-2">From</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="from"
                                    value={from}
                                    onChange={handleFromInputChange}
                                    placeholder="From"
                                    onClick={() => setShowFromList(true)}
                                    className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                                <FaPlaneDeparture className="absolute left-4 top-4 text-gray-500" />
                            </div>
                            {showFromList && (
                                <div className="absolute left-0 right-0 bg-white shadow-lg max-h-48 overflow-y-auto mt-1 rounded-lg z-10">
                                    {(from ? filteredFromAirports : flightDetails).map((airport) => (
                                        <div
                                            key={airport.id}
                                            className="p-4 cursor-pointer hover:bg-pink-100 flex items-center space-x-4 rounded-lg transition-all duration-200"
                                            onClick={() => handleSelectAirport(airport, "from")}
                                        >
                                            <svg
                                                fill="#000000"
                                                height="20px"
                                                width="20px"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 511.999 511.999"
                                                xmlSpace="preserve"
                                                className="text-gray-500"
                                            >
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path d="M492.388,19.61c-26.144-26.145-68.463-26.148-94.611,0.001l-74.748,74.748L138.759,31.652 c-6.032-2.052-12.708-0.5-17.215,4.007L74.239,82.965c-7.383,7.38-6.259,19.648,2.306,25.577l137.268,95.031l-39.985,39.986 l-50.355-10.072c-5.481-1.093-11.151,0.62-15.106,4.575l-47.306,47.307c-8.062,8.059-5.862,21.681,4.346,26.785l89.626,44.814 l44.812,89.625c5.108,10.216,18.732,12.4,26.786,4.346l47.306-47.307c3.954-3.954,5.671-9.623,4.574-15.106L268.44,338.17 l39.986-39.985l95.032,137.268c5.973,8.628,18.243,9.642,25.577,2.306l47.307-47.307c4.506-4.506,6.06-11.181,4.006-17.214 L417.64,188.97l74.748-74.749C518.534,88.076,518.536,45.758,492.388,19.61z M112.063,92.447l25.775-25.775l158.828,54.049 l-58.811,58.811L112.063,92.447z M445.327,374.161l-25.775,25.776l-87.086-125.791c23.696-23.696,17.323-17.323,58.811-58.811 L445.327,374.161z M468.737,90.569c-6.308,6.308-224.769,224.77-230.278,230.279c-3.954,3.954-5.671,9.623-4.575,15.106 l10.071,50.355l-24.568,24.568l-36.928-73.856c-1.619-3.237-4.243-5.862-7.48-7.479l-73.857-36.929l24.568-24.568l50.355,10.072 c5.484,1.092,11.152-0.621,15.106-4.575L421.431,43.264c13.075-13.075,34.231-13.074,47.306,0 C481.809,56.336,481.81,77.496,468.737,90.569z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className="flex flex-col">
                                                <div className="font-semibold text-lg text-black">{airport.airportCode} - {airport.city}</div>
                                                <div className="text-sm text-gray-600">{airport.airportName}</div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>

                        {/* To Input */}
                        <div className="flex-1 relative">
                            <label htmlFor="to" className="block text-sm font-medium text-gray-900 mb-2">To</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="to"
                                    value={to}
                                    onChange={handleToInputChange}
                                    placeholder="To"
                                    onClick={() => setShowToList(true)}
                                    className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                />
                                <FaPlaneArrival className="absolute left-4 top-4 text-gray-500" />
                            </div>
                            {showToList && (
                                <div className="absolute left-0 right-0 bg-white shadow-lg max-h-48 overflow-y-auto mt-1 rounded-lg z-10">
                                    {(to ? filteredToAirports : flightDetails).map((airport) => (
                                        <div
                                            key={airport.id}
                                            className="p-4 cursor-pointer hover:bg-pink-100 flex items-center space-x-4 rounded-lg transition-all duration-200"
                                            onClick={() => handleSelectAirport(airport, "to")}
                                        >
                                            <svg
                                                fill="#000000"
                                                height="20px"
                                                width="20px"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 511.999 511.999"
                                                xmlSpace="preserve"
                                                className="text-gray-500"
                                            >
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path d="M492.388,19.61c-26.144-26.145-68.463-26.148-94.611,0.001l-74.748,74.748L138.759,31.652 c-6.032-2.052-12.708-0.5-17.215,4.007L74.239,82.965c-7.383,7.38-6.259,19.648,2.306,25.577l137.268,95.031l-39.985,39.986 l-50.355-10.072c-5.481-1.093-11.151,0.62-15.106,4.575l-47.306,47.307c-8.062,8.059-5.862,21.681,4.346,26.785l89.626,44.814 l44.812,89.625c5.108,10.216,18.732,12.4,26.786,4.346l47.306-47.307c3.954-3.954,5.671-9.623,4.574-15.106L268.44,338.17 l39.986-39.985l95.032,137.268c5.973,8.628,18.243,9.642,25.577,2.306l47.307-47.307c4.506-4.506,6.06-11.181,4.006-17.214 L417.64,188.97l74.748-74.749C518.534,88.076,518.536,45.758,492.388,19.61z M112.063,92.447l25.775-25.775l158.828,54.049 l-58.811,58.811L112.063,92.447z M445.327,374.161l-25.775,25.776l-87.086-125.791c23.696-23.696,17.323-17.323,58.811-58.811 L445.327,374.161z M468.737,90.569c-6.308,6.308-224.769,224.77-230.278,230.279c-3.954,3.954-5.671,9.623-4.575,15.106 l10.071,50.355l-24.568,24.568l-36.928-73.856c-1.619-3.237-4.243-5.862-7.48-7.479l-73.857-36.929l24.568-24.568l50.355,10.072 c5.484,1.092,11.152-0.621,15.106-4.575L421.431,43.264c13.075-13.075,34.231-13.074,47.306,0 C481.809,56.336,481.81,77.496,468.737,90.569z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className="flex flex-col">
                                                <div className="font-semibold text-lg text-black">{airport.airportCode} - {airport.city}</div>
                                                <div className="text-sm text-gray-600">{airport.airportName}</div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Date Input */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">Date</label>
                        <div className="relative">
                            <input
                                id="date"
                                type="date"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            />
                            <FaCalendarAlt className="absolute left-4 top-4 text-gray-500" />
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
};

export default SearchFlight;
