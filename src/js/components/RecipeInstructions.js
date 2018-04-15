import React from 'react';
import styled, { keyframes } from 'styled-components';

function sanitizeInstructions(instructions) {
    let sanitized = {
        ingredients: [],
        measurements: []
    };
    Object.keys(instructions).forEach(key => {
        const objProp = instructions[key];
        if (!!objProp) {
            if (key.toLowerCase().includes('ingredient')) {
                sanitized.ingredients.push(objProp);
            } else if (key.toLowerCase().includes('measure')) {
                sanitized.measurements.push(objProp);
            } else {
                sanitized[key] = objProp;
            }
        }
    });
    return sanitized;
};
const fadeUp = keyframes`
    from {
        transform: translateY(10%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`;
const Wrapper = styled.div`
    animation: ${fadeUp} 500ms ease forwards;
    opacity: 1;
`;
const InstructionsWrapper = styled.div`
    max-height: 35vh;
    overflow-y: scroll; 
`
const RecipeInstructions = props => {
    const steps = sanitizeInstructions(props.instructions);
    const { ingredients, measurements } = steps;
    return props.isRecipeSelected && steps.idMeal ?
        <Wrapper>
            <h2>Ingredients</h2>
            <ul>{ingredients.map((ingredient, index) => (
                <li
                    key={`${ingredient}-${index}`}>
                    {`${measurements[index]} ${ingredient}`}
                </li>
            ))}</ul>
            <h2>Instructions</h2>
            <InstructionsWrapper>
                {
                    steps.strInstructions.split('.').map((sentence, i) => (
                        !parseInt(sentence) ?
                            <p key={`${sentence.substr(0, 3)}-${i}`}>
                                {sentence}
                            </p> :
                            null
                    ))
                }
            </InstructionsWrapper>
            <a href={steps.strYoutube} target="_blank">Video Link</a>
        </Wrapper>
        :
        null;
}

export default RecipeInstructions;