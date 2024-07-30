import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../styles/RecipeDetails.css';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa6';


const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state || {};
    const recipeName = recipe?.recipeName;
    const recipePic = recipe?.url;

    function HeartIcon({isFavourited}){
        if(isFavourited){
            return <FaHeart style={{ color: 'red' }} />
        } else {
            return <CiHeart style={{color:'white'}}/>
        }
    }

    const [isFavourited, setIsFavourited] = useState(false);

    function favouriteRecipe() {
        setIsFavourited(!isFavourited);
    }

    return(
        <div className="h-auto bg-gray-800 flex flex-col p-10 gap-10">
            {/* navbar section */}
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                    <Link to="/recipes"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
                <div className='text-6xl btn-ghost btn' onClick={favouriteRecipe}>
                    <HeartIcon isFavourited={isFavourited}/>
                </div>
            </div>
            {/* Recipe name and ingredients */}
            <h2 className='text-white text-6xl title-container'>{recipeName}</h2>

            {/* photo with overview */}
            <div className='bg-white rounded-lg flex flex-col p-10'>
                <div className='w-full h-[500px] overflow-hidden relative py-10'>
                    <img
                    src={recipePic} alt='recipe'
                    className="rounded-lg object-cover object-center w-full h-full"
                    />
                </div>
                <h2 className='text-blue-500 text-5xl pb-3'>Overview</h2>
                <p className='text-gray-700 text-3xl'>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.</p>
            </div>

            <div>
                <div className='bg-yellow-100 rounded-lg p-5'>
                    <h2 className='text-black text-4xl pb-2'>You will need...</h2>
                    <ul className=''>
                        <li className='text-black text-3xl list-disc list-inside'>1 cup of sugar</li>
                        <li className='text-black text-3xl list-disc list-inside'>2 tablespoons of spice</li>
                        <li className='text-black text-3xl list-disc list-inside'>1/2 cup of everything nice</li>
                        <li className='text-black text-3xl list-disc list-inside'>A splash of Chemical X</li>
                    </ul>
                </div>
            </div>

            {/* Nutritional facts */}
            <div className='bg-white rounded-lg flex flex-col p-10'>
                <h2 className="text-blue-500 text-5xl pb-3">Nutrition Facts</h2>
                <div className="nutrition-facts text-gray-700 text-3xl">
                    <div className="nutrition-header">Amount Per Serving</div>
                    <div className="nutrition-item">
                        <span>Calories</span>
                        <span>200</span>
                    </div>
                    <div className="nutrition-item">
                        <span>Total Fat</span>
                        <span>10g</span>
                    </div>
                    <div className="nutrition-sub-item">
                        <span>Saturated Fat</span>
                        <span>2g</span>
                    </div>
                    <div className="nutrition-item">
                        <span>Cholesterol</span>
                        <span>30mg</span>
                    </div>
                    <div className="nutrition-item">
                        <span>Sodium</span>
                        <span>150mg</span>
                    </div>
                    <div className="nutrition-item">
                        <span>Total Carbohydrate</span>
                        <span>30g</span>
                    </div>
                    <div className="nutrition-sub-item">
                        <span>Dietary Fiber</span>
                        <span>5g</span>
                    </div>
                    <div className="nutrition-sub-item">
                        <span>Sugars</span>
                        <span>10g</span>
                    </div>
                    <div className="nutrition-item">
                        <span>Protein</span>
                        <span>5g</span>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className='bg-white rounded-lg flex flex-col p-10'>
                <h2 className='text-blue-500 text-5xl pb-5'>Instructions</h2>
                <ol className='text-gray-700 text-3xl list-decimal list-outside pl-10 flex flex-col gap-5'>
                    <li>Preheat your oven to 350°F and line a baking tray with parchment paper made from enchanted forests.</li>
                    <li>In a large bowl, mix 1 cup of sugar, 2 tablespoons of spice, and 1/2 cup of everything nice. Don't forget to add a dash of Chemical X for that extra kick.</li>
                    <li>Stir in 1/4 cup of dragon tears (or water, if you're out of dragon tears) until the mixture is smooth and sparkly.</li>
                    <li>Pour the mixture onto the baking tray and spread it evenly with a magic wand (or a regular spatula if your wand is in the shop).</li>
                    <li>Bake for 20 minutes, or until it looks like a deliciously golden cloud.</li>
                    <li>Let cool for 10 minutes on a cooling rack made of candy canes.</li>
                </ol>
            </div>
        </div>
        
    );
}

export default RecipeDetails;