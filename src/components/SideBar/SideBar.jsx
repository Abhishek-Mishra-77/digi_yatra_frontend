import { useState } from "react";
import SearchFlight from "../SearchFlight/SearchFlight";
import PassengerDetails from "../PassengerDetails/PassengerDetails";
import SelectSeat from "../SelectSeat/SelectSeat";
import BoardingPass from "../BoardingPass/BoardingPass";
import SelfCheckIn from "../SelfCheckIn/SelfCheckIn";
import Conclusion from "../Conclusion/Conclusion";
import { FaAnglesLeft } from "react-icons/fa6";

const SideBar = () => {
    const [activeTab, setActiveTab] = useState("Search Flight");

    const menuItems = [
        "Search Flight",
        "Passenger Details",
        "Select Seat",
        "Boarding Pass",
        "Self Check-in",
        "Conclusion",
    ];

    const renderComponent = () => {
        switch (activeTab) {
            case "Search Flight":
                return <SearchFlight />;
            case "Passenger Details":
                return <PassengerDetails />;
            case "Select Seat":
                return <SelectSeat />;
            case "Boarding Pass":
                return <BoardingPass />;
            case "Self Check-in":
                return <SelfCheckIn />;
            case "Conclusion":
                return <Conclusion />;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen p-4">
            {/* Sidebar */}
            <div className="flex flex-col w-64 bg-gradient-to-br    from-pink-400 to-orange-400 border rounded-lg text-white shadow-lg">
                <div>
                    <FaAnglesLeft />
                </div>
                <nav className="flex-1 px-4 py-6">
                    <ul className="space-y-4">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setActiveTab(item)}
                                    className={`w-full text-left px-4 py-3 text-md font-medium rounded-lg transition-all ${activeTab === item
                                        ? "bg-white text-pink-500 shadow"
                                        : "hover:bg-pink-300 hover:text-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div
                className="flex-1 bg-cover bg-center bg-no-repeat p-8"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1587329310679-0b4ae0dbd591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
                }}
            >
                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-lg">
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
