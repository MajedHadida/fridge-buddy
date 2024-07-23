import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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
            <div>
                <h2 className='text-blue-500 text-6xl'>{recipeName}</h2>
                <ul className='pt-10'>
                    <li className='text-white text-3xl list-disc list-inside'>1 cup of sugar</li>
                    <li className='text-white text-3xl list-disc list-inside'>2 tablespoons of spice</li>
                    <li className='text-white text-3xl list-disc list-inside'>1/2 cup of everything nice</li>
                    <li className='text-white text-3xl list-disc list-inside'>Chemical X</li>
                </ul>
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
                <h2 className='text-blue-500 text-5xl pb-3'>Nurition Facts</h2>
                <p className='text-gray-700 text-3xl'>Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.</p>
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