import box from '../assets/inventoryBox.png'
import recipe from '../assets/recipe.png'
import more from '../assets/more.png'
import weather from '../assets/weather.png'
import { FaGears } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Home = () => {
    return(
        <div className="bg-gray-800 p-10 h-auto">
        <div className="grid grid-cols-3 gap-10 h-screen">
            <h2 className="col-span-2 row-span-1 col-start-1 col-end-3 bg-none text-white text-7xl pl-10 pt-20">
            Welcome to FridgeBuddy, <span className='text-blue-400'>Username</span>.
            </h2>
            <div className="col-span-1 row-span-1 col-start-3 col-end-4 flex justify-center pt-20">
            <Link to={'/inventory'} className="rounded-2xl bg-base-100 w-72 shadow-xl flex justify-center flex-col items-center">
                <h2 className="card-title font-bold text-3xl">Inventory</h2>
                <figure><img src={box} className='w-[288px]' alt="box" /></figure>
            </Link>
            </div>
            <div className="col-span-2 row-span-2 col-start-1 col-end-3 row-start-2 row-end-4 flex justify-center items-center">
            <div className='pt-5 pr-5 pl-5 pb-10 rounded-2xl bg-gray-300 flex flex-col'>
                <img src={weather} className='rounded-xl' alt='weathers' />
                <p className='text-3xl text-center pt-5 font-bold'>Weather in Location</p>
            </div>
            </div>
            <div className="col-span-1 row-span-1 col-start-3 col-end-4 flex justify-center">
            <Link to={'/recipes'} className="rounded-2xl bg-base-100 w-72 shadow-xl flex justify-center flex-col items-center">
                <h2 className="card-title px-7 pt-5 font-bold text-3xl">Recipes</h2>
                <figure><img src={recipe} className='w-[288px]' alt="recipe" /></figure>
            </Link>
            </div>
            <div className="col-span-1 row-span-1 col-start-3 col-end-4 flex justify-center">
            <Link to={'/more'} className="rounded-2xl bg-base-100 w-72 shadow-xl flex justify-center flex-col items-center">
                <h2 className="card-title px-7 pt-5 font-bold text-3xl">More</h2>
                <figure><img src={more} className='w-[200px]' alt="dots" /></figure>
            </Link>
            </div>
            <div className="col-span-3 row-span-1 col-start-1 col-end-4">
            <div className='flex flex-row justify-evenly gap-5'>
                <div className="card bg-white w-96 shadow-xl border-white border-2">
                <div className="card-body">
                    <h2 className="text-3xl text-black text-center">Settings</h2>
                    <FaGears className='w-full h-28 my-10'/>
                    <div className="card-actions justify-center">
                    </div>
                </div>
                </div>
                <Link to={"/music"} className="card bg-white w-96 shadow-xl border-white border-2">
                <div className="card-body">
                    <h2 className="text-3xl text-black text-center">Music</h2>
                    <FaMusic className='w-full h-28 my-10'/>
                    <div className="card-actions justify-center">
                    </div>
                </div>
                </Link>
                <div className="card bg-white w-96 shadow-xl border-white border-2">
                <div className="card-body">
                    <h2 className="text-3xl text-black text-center">Manual</h2>
                    <FaBookOpen className='w-full h-28 my-10'/>
                    <div className="card-actions justify-center">
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        
    );
}

export default Home;