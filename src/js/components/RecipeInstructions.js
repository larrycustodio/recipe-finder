import React from 'react';

const RecipeInstructions = props => {
    console.log(props.instructions);
    return props.isRecipeSelected ?
        <div>Just follow these steps!</div>
        :
        null;
}

export default RecipeInstructions;