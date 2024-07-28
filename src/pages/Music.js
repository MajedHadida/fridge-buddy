import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { FaPause } from "react-icons/fa";


const Music = () => {
    return (
        <div className="h-screen bg-gray-800 flex flex-col p-10 gap-10">
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                    <Link to="/"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
            </div>

            <h2 className='text-white text-6xl title-container'>Music</h2>

            {/* playlist container */}
            <div className="flex flex-col bg-gray-300 rounded-xl p-10 gap-5">
                <h2 className="text-4xl">History</h2>
                <div className="flex flex-row overflow-x-auto gap-10">
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src="https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl" 
                            src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                </div>
                <h2 className="text-4xl">Recommended</h2>
                <div className="flex flex-row overflow-x-auto gap-10">
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src="https://images.unsplash.com/photo-1525093485273-34834413e1ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white w-[400px] h-[400px] rounded-xl shadow">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src="https://images.unsplash.com/photo-1466232373731-46205f0b668e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        </div>
                        <p className="text-3xl text-center">Playlist name</p>
                    </div>
                </div>

                {/* play button */}
                <div className="text-6xl flex flex-row justify-evenly bg-white rounded-lg p-5 shadow">
                    <IoPlaySkipBackSharp/>
                    <FaPause/>
                    <FaPlay/>
                    <IoPlaySkipForward/>
                </div>

            </div>
        </div>
    )
}

export default Music;