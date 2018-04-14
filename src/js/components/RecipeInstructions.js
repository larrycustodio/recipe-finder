import React from 'react';

const RecipeInstructions = props => {
    return props.isRecipeSelected ?
        <div>Just follow these steps!</div>
        :
        null;
}

export default RecipeInstructions;