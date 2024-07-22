import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipeName } = location.state || {};
    return(
        <div>{recipeName}</div>
    );
}

export default RecipeDetails;