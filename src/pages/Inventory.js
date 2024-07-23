import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaEgg } from "react-icons/fa6";
import { FaBreadSlice } from "react-icons/fa";
import { FaAppleWhole } from "react-icons/fa6";
import { TbMilk } from "react-icons/tb";




const Inventory = () => {
    const items = [
        {
            name:'Eggs',
            icon: <FaEgg/>,
            quantity: '4',
            expireDuration:'10 days',
            addTime:'Yesterday'
        },
        {
            name:'Whole Wheat Bread',
            icon: <FaBreadSlice/>,
            quantity: '2',
            expireDuration:'4 days',
            addTime:'Yesterday'
        },
        {
            name:'Apples',
            icon: <FaAppleWhole/>,
            quantity: '7',
            expireDuration:'5 days',
            addTime:'Yesterday'
        },
        {
            name:'Yogurt',
            icon: <TbMilk/>,
            quantity: '1',
            expireDuration:'Tomorrow',
            addTime:'Yesterday'
        }
    ]

    return(
        <div className="h-screen max-h-screen bg-gray-800 flex flex-col p-10">
            {/* navbar section */}
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                <Link to="/"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
                <div className="flex-none gap-10 ">
                    <div className="text-6xl">
                        <FaPlus style={{ color: 'green' }} />
                    </div>
                    <div className="text-6xl">
                        <FaPen style={{ color: 'white' }} />
                    </div>
                </div>
           </div>

            {/* Title section */}
            <h2 className="text-6xl text-white pb-5">
                Inventory
            </h2>

            {/* Inventory Container */}
            <div className="bg-gray-300 h-full flex flex-col rounded-xl p-5 overflow-scroll gap-1">
                {/* item container */}
                {items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white flex flex-row justify-between rounded-xl shadow p-10">
                        <div className="text-4xl flex items-center">
                            {items[itemIndex].icon}
                        </div>
                        <div className="text-4xl flex flex-col items-center gap-5 w-2/5">
                            {/* Food name */}
                            <h2 className="flex flex-row flex-wrap gap-5 text-center">
                                {items[itemIndex].name}
                            </h2>
                            ({items[itemIndex].quantity})
                        </div>
                        <div className="flex flex-col">
                            <div className="text-4xl">
                                {/* Expire date */}
                                Expires: {items[itemIndex].expireDuration}
                            </div>
                            <div className="text-4xl">
                                {/* Add date */}
                                Added: {items[itemIndex].addTime}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inventory;