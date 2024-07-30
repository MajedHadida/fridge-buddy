import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { LuListRestart } from "react-icons/lu";
import { MdOutlineRecommend } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

const Favourites = () =>{
    const favouriteRecipes = [
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Tomato Soup',
            url: 'https://plus.unsplash.com/premium_photo-1675727579542-ad785e1cee41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Ramen',
            url: 'https://images.unsplash.com/photo-1591325418441-ff678baf78ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Ratatouille',
            url: 'https://plus.unsplash.com/premium_photo-1713635953194-ab8a625b2477?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]
    return(
<div className="h-screen max-h-screen bg-gray-800 flex flex-col">
          <div className="navbar bg-gray-800 pt-10 pl-10 pr-10">
            <div className="flex-1 text-6xl">
              <Link to="/recipes"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-2xl" />
              </div>
              <div className="text-5xl">
                <FaGear style={{ color: 'white' }} />
              </div>
            </div>
          </div>
          <h2 className="text-6xl text-white title-container mx-20 flex flex-row justify-center gap-5"><FaHeart style={{ color: 'red' }} />Favourites</h2>
          <div className="flex-grow flex justify-center overflow-hidden">
            <div className="bg-gray-300 w-5/6 h-full overflow-y-auto rounded-xl">
              <div className="flex flex-row flex-wrap justify-center gap-5 py-5">
                {favouriteRecipes.map((recipe, recipeIndex) => (
                  <Link
                    key={recipeIndex}
                    to="/recipes/recipe-details"
                    className="bg-white rounded-lg flex flex-col items-center shadow w-[40%] min-w-[350px]"
                    state={{ recipe: recipe }}
                  >
                    <div className="w-full h-48 overflow-hidden relative">
                      <img
                        src={favouriteRecipes[recipeIndex].url}
                        className="rounded-t-lg object-cover object-center w-full h-full"
                      />
                    </div>
                    <h2 className="card-title text-blue-500 pb-2">{favouriteRecipes[recipeIndex].recipeName}</h2>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center h-40 bg-white">
            <Link to="#" className="text-white text-6xl">
                <FaHeart style={{ color: 'red' }} />
            </Link>
            <Link to="/" className="text-white text-6xl">
                <LuListRestart style={{ color: 'black' }} /> 
            </Link>
            <Link to="/" className="text-white text-6xl">
                <MdOutlineRecommend style={{ color: 'green' }} />
            </Link>
          </div>
        </div>
    )


}

export default Favourites;