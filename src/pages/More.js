import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";


const More = () => {
  return (
    <div className="h-screen bg-gray-800 flex flex-col p-10 gap-10">
      <div className="navbar bg-gray-800">
        <div className="flex-1 text-6xl">
          <Link to="/">
            <IoChevronBackOutline style={{ color: "white" }} />
          </Link>
        </div>
      </div>

      <h2 className="text-white text-5xl title-container">
        More
      </h2>

      <p className="text-3xl text-white">Any new features to be added here, stay tuned 🥳</p>


    </div>
  );
};

export default More;
