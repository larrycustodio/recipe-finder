import React from 'react';

function sanitizeInstructions(instructions){
    let sanitized = {
        ingredients: [],
        measurements: []
    };
    Object.keys(instructions).forEach(key=>{
        const objProp = instructions[key];
        if(!!objProp){
            if(key.toLowerCase().includes('ingredient')){
                sanitized.ingredients.push(objProp);
            } else if(key.toLowerCase().includes('measure')){
                sanitized.measurements.push(objProp);
            } else {
                sanitized[key] = objProp;
            }
        } 
    });
    return sanitized;
};


const RecipeInstructions = props => {
    const steps = sanitizeInstructions(props.instructions);
    const { ingredients, measurements } = steps;
    return props.isRecipeSelected ?
        <div>

            <h2>Ingredients</h2>
            <ul>{ ingredients.map((ingredient,index) => (
                <li
                key={`${ingredient}-${index}`}>
                {`${measurements[index]} ${ingredient}`}
                </li>
            )) }</ul>
            <h2>Instructions</h2>
            <p>{ steps.strInstructions }</p>
            <a href={steps.strYoutube} target="_blank">Video Link</a>
        
        </div>
        :
        null;
}

export default RecipeInstructions;