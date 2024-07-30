import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


const AddItem = () => {
    return(
        <div className="h-screen max-h-screen bg-gray-800 flex flex-col p-10">
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                <Link to="/inventory"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
           </div>
           <h2 className="text-6xl text-white title-container mt-5">
                Add Item
           </h2>
           <div className="bg-gray-300 h-auto flex flex-col rounded-xl p-5 overflow-scroll gap-1">
                <form className="text-5xl flex flex-col gap-10">
                    <div className="flex flex-col">
                        <label>Item Name</label>
                        <input type="text" className="grow" placeholder="Item Name" />
                    </div>
                    <div className="flex flex-col">
                        <p>Quantity</p>
                        <input type="number" className="grow" placeholder="Quantity" />
                    </div>
                    <div className="flex flex-col">
                        <p>Expire date</p>
                        <input aria-label="Date" type="date" className="w-1/2" />
                    </div>
                <div className="flex flex-row gap-5">
                    <button type="submit" className="btn btn-success text-5xl w-80 h-24"><FaPlus/>Add</button>
                    <button className="btn btn-secondary text-5xl w-80 h-24">Clear</button>
                </div>
                
                </form>
           </div>
        </div>
    )
}

export default AddItem;