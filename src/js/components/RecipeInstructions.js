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
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    opacity: 1;
`;

const IngredientsWrapper = styled.div`
    ul {
        padding: 0;
        list-style: none;
        li {
            margin-bottom: 0.35em;
        }
    }
    @media(min-width:768px){
        flex: 1 0;
    }
`;

const InstructionsWrapper = styled.div`
    max-height: 35vh;
    overflow-y: scroll; 
    @media(min-width:768px){
        flex: 2.5 0;
    }
`;

const RecipeInstructions = props => {
    const steps = sanitizeInstructions(props.instructions);
    const { ingredients, measurements } = steps;
    return props.isRecipeSelected && steps.idMeal ?
        <Wrapper>
            <IngredientsWrapper>
                <h2>You will need</h2>
                <ul>{ingredients.map((ingredient, index) => (
                    <li
                        key={`${ingredient}-${index}`}>
                        {`${measurements[index]} ${ingredient}`}
                    </li>
                ))}
                </ul>
            </IngredientsWrapper>
            <InstructionsWrapper>
                <h2>Instructions</h2>
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
        </Wrapper>
        :
        null;
}

export default RecipeInstructions;