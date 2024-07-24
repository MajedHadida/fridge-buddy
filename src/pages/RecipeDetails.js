import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../styles/RecipeDetails.css';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state || {};
    const recipeName = recipe?.recipeName;
    const recipePic = recipe?.url;

    return(
        <div className="h-auto bg-gray-800 flex flex-col p-10 gap-10">
            {/* navbar section */}
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                    <Link to="/"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
            </div>
            {/* Recipe name and ingredients */}
            <h2 className='text-blue-200 text-6xl'>{recipeName}</h2>
            <div>
                <div className='bg-yellow-100 rounded-lg p-5'>
                    <h2 className='text-black text-4xl pb-2'>You will need...</h2>
                    <ul className=''>
                        <li className='text-black text-3xl list-disc list-inside'>1 cup of sugar</li>
                        <li className='text-black text-3xl list-disc list-inside'>2 tablespoons of spice</li>
                        <li className='text-black text-3xl list-disc list-inside'>1/2 cup of everything nice</li>
                        <li className='text-black text-3xl list-disc list-inside'>Chemical X</li>
                    </ul>
                </div>
                
            </div>

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
                <h2 className='text-blue-500 text-5xl pb-3'>Instructions</h2>
                <p className='text-gray-700 text-3xl'>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.</p>
            </div>
        </div>
        
    );
}

export default RecipeDetails;