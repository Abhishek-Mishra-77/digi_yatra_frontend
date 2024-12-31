import { memo, useState } from "react";
import { FaSearch, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SearchFlight = ({ setActiveTab }) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
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
            setFrom(airport);
            setShowFromList(false);
        } else {
            setTo(airport);
            setShowToList(false);
        }
    };

    const onSaveFlightHandler = (e) => {
        e.preventDefault();
        if (!to) {
            toast.warning("Please select a destination");
            return;
        }
        if (!from) {
            toast.warning("Please select a source");
            return;
        }

        if (!date) {
            toast.warning("Please select a date");
            return;
        }

        const flight = {
            from: from.airportCode,
            fromName: from.airportName,
            to: to.airportCode,
            toName: to.airportName,
            date: date
        };

        localStorage.setItem("flight", JSON.stringify(flight));
        setActiveTab("Passenger Details");
        toast.success("Flight details saved successfully");
    };

    return (
        <div className="flex flex-col justify-center items-center text-white p-4 animate-fadeIn">
            <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">Search Flight</h1>
            <div className="flex justify-center w-full bg-white p-8 rounded-lg shadow-2xl max-w-4xl transform transition-transform hover:scale-105">
                <form className="w-full space-y-6" onSubmit={onSaveFlightHandler}>
                    <div className="flex flex-wrap space-x-6 justify-between">
                        <div className="flex-1 relative">
                            <label htmlFor="from" className="block text-sm font-medium text-gray-900 mb-2">From</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="from"
                                    value={from?.airportCode}
                                    onChange={handleFromInputChange}
                                    placeholder="From"
                                    onClick={() => setShowFromList(true)}
                                    className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-pink-500 focus:border-pink-500 transition duration-300"
                                />
                                <FaPlaneDeparture className="absolute left-4 top-4 text-gray-500" />
                            </div>
                            {showFromList && (
                                <div className="absolute left-0 right-0 bg-white shadow-lg max-h-48 overflow-y-auto mt-1 rounded-lg z-10 animate-slideIn">
                                    {(from ? filteredFromAirports : flightDetails).map((airport) => (
                                        <div
                                            key={airport.id}
                                            className="p-4 cursor-pointer hover:bg-pink-100 flex items-center space-x-4 rounded-lg transition-all duration-200"
                                            onClick={() => handleSelectAirport(airport, "from")}
                                        >
                                            <div className="flex flex-col">
                                                <div className="font-semibold text-lg text-black">{airport.airportCode} - {airport.city}</div>
                                                <div className="text-sm text-gray-600">{airport.airportName}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex-1 relative">
                            <label htmlFor="to" className="block text-sm font-medium text-gray-900 mb-2">To</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="to"
                                    value={to?.airportCode}
                                    onChange={handleToInputChange}
                                    placeholder="To"
                                    onClick={() => setShowToList(true)}
                                    className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-pink-500 focus:border-pink-500 transition duration-300"
                                />
                                <FaPlaneArrival className="absolute left-4 top-4 text-gray-500" />
                            </div>
                            {showToList && (
                                <div className="absolute left-0 right-0 bg-white shadow-lg max-h-48 overflow-y-auto mt-1 rounded-lg z-10 animate-slideIn">
                                    {(to ? filteredToAirports : flightDetails).map((airport) => (
                                        <div
                                            key={airport.id}
                                            className="p-4 cursor-pointer hover:bg-pink-100 flex items-center space-x-4 rounded-lg transition-all duration-200"
                                            onClick={() => handleSelectAirport(airport, "to")}
                                        >
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

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">Date</label>
                        <div className="relative">
                            <input
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                id="date"
                                type="date"
                                className="w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-white shadow-lg focus:ring-pink-500 focus:border-pink-500 transition duration-300"
                            />
                            <FaCalendarAlt className="absolute left-4 top-4 text-gray-500" />
                        </div>
                    </div>

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

export default memo(SearchFlight);
