import { useState } from "react";
import SearchFlight from "../SearchFlight/SearchFlight";
import PassengerDetails from "../PassengerDetails/PassengerDetails";
import SelectSeat from "../SelectSeat/SelectSeat";
import BoardingPass from "../BoardingPass/BoardingPass";
import SelfCheckIn from "../SelfCheckIn/SelfCheckIn";
import Conclusion from "../Conclusion/Conclusion";
import { FaAnglesLeft } from "react-icons/fa6";
import mainImage from "../../assets/mainImage.jpg";

const SideBar = () => {
    const [activeTab, setActiveTab] = useState("Search Flight");
    const [collapsed, setCollapsed] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const menuItems = [
        { name: "Search Flight" },
        { name: "Passenger Details" },
        { name: "Select Seat" },
        { name: "Boarding Pass" },
        { name: "Self CheckIn" },
        { name: "Conclusion" },
    ];

    const renderComponent = () => {
        switch (activeTab) {
            case "Search Flight":
                return <SearchFlight setActiveTab={setActiveTab} />;
            case "Passenger Details":
                return <PassengerDetails setActiveTab={setActiveTab} />;
            case "Select Seat":
                return <SelectSeat setActiveTab={setActiveTab} />;
            case "Boarding Pass":
                return <BoardingPass setActiveTab={setActiveTab} />;
            case "Self CheckIn":
                return <SelfCheckIn setActiveTab={setActiveTab} />;
            case "Conclusion":
                return <Conclusion setActiveTab={setActiveTab} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen p-4">
            {/* Sidebar */}
            <div
                className={`flex flex-col bg-gradient-to-br from-pink-400 to-orange-400 relative border rounded-lg text-white shadow-lg transition-all duration-300 ${collapsed ? "w-8" : "w-64"} max-[768px]:hidden`}
            >
                <nav className="flex-1 px-2 py-10 space-y-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`flex items-center gap-4 w-full px-4 py-3 text-md font-medium rounded-lg transition-all duration-300 ${activeTab === item.name
                                ? "bg-white text-pink-500 shadow-lg"
                                : "hover:bg-pink-300 hover:text-white"
                                }`}
                        >
                            {!collapsed && item.name}
                        </button>
                    ))}
                </nav>
                <div
                    className="absolute top-2 right-1 cursor-pointer"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <FaAnglesLeft
                        className={`text-white text-xl hover:text-pink-300 transition duration-200 transform ${collapsed ? "rotate-180" : ""
                            }`}
                    />
                </div>
            </div>

            {/* Dropdown Button for Small Devices */}
            <div className="max-[768px]:block hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="p-3 bg-pink-500 text-white rounded-full shadow-lg focus:outline-none"
                >
                    <FaAnglesLeft
                        className={`text-white text-xl hover:text-pink-300 transition duration-200 transform ${collapsed ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                    <div className="absolute top-14 left-0 w-48 bg-white rounded-lg shadow-lg z-50">
                        <nav className="flex flex-col p-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        setActiveTab(item.name);
                                        setDropdownOpen(false); 
                                    }}
                                    className={`w-full text-left px-4 py-2 text-md font-medium rounded-lg transition-all duration-300 ${activeTab === item.name
                                        ? "bg-pink-400 text-white"
                                        : "hover:bg-pink-300 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div
                className="flex-1 overflow-auto p-8 border rounded-lg max-[768px]:ml-4 max-[768px]:mr-4 ml-4"
                style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="p-6 rounded-lg">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
