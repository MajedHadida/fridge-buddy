import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRecommend } from "react-icons/md";
import { LuListRestart } from "react-icons/lu";




//All photos used go to respective owners on Unsplash. Links provided below to owners.

const Recipes = () => {
    const recipes = [
        {
            recipeName: 'Protein Pancakes',
            url: 'https://images.unsplash.com/photo-1497445702960-c21c96af4c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Eggs and Toast',
            url: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Green Salad',
            url: 'https://images.unsplash.com/photo-1623489254660-db5b367881d9?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Berry Smoothie',
            url: 'https://images.unsplash.com/photo-1494315153767-9c231f2dfe79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Steak and Potatoes',
            url: 'https://images.unsplash.com/photo-1676471755539-d99326272d53?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Quinoa Salad',
            url: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Buddha Bowl',
            url: 'https://images.unsplash.com/photo-1589442305595-62647c1514f9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Hummus',
            url: 'https://images.unsplash.com/photo-1591299177061-2151e53fcaea?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            recipeName: 'Falafel',
            url: 'https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },

    ]


    return (
        <div className="h-screen max-h-screen bg-gray-800 flex flex-col">
          <div className="navbar bg-gray-800 pt-10 pl-10 pr-10">
            <div className="flex-1 text-6xl">
              <Link to="/"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
              <div className="text-6xl">
                <FaGear style={{ color: 'white' }} />
              </div>
            </div>
          </div>
          <div className="text-6xl text-white pl-20">Recipes</div>
          <div className="flex-grow flex justify-center pt-10 overflow-hidden">
            <div className="bg-gray-300 w-5/6 h-full overflow-y-auto rounded-xl">
              <div className="flex flex-row flex-wrap justify-center gap-5 py-5">
                {recipes.map((recipe, recipeIndex) => (
                  <Link
                    key={recipeIndex}
                    to="/recipes/recipe-details"
                    className="bg-white rounded-lg flex flex-col items-center shadow w-[40%] min-w-[350px]"
                    state={{ recipeName: recipes[recipeIndex].recipeName }}
                  >
                    <div className="w-full h-48 overflow-hidden relative">
                      <img
                        src={recipes[recipeIndex].url}
                        className="rounded-t-lg object-cover object-center w-full h-full"
                      />
                    </div>
                    <h2 className="card-title text-blue-500 pb-2">{recipes[recipeIndex].recipeName}</h2>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center h-40 bg-white">
            <Link to="/" className="text-white text-6xl">
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
      );
    };

export default Recipes;