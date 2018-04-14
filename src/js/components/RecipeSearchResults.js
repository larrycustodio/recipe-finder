import React from 'react';
import styled from 'styled-components';

const RecipeViewWrapper = styled.div`
    p {
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 0.75em;
        text-align: center;
        color: rgb(125,240,129);
    }
    h1 {
        font-size: 0.85em;
        font-weight: 700;
        margin-bottom: 0.5em;
        text-transform: uppercase;
        text-align: center;
    }
`;

const RecipeImageContainer = styled.div`
    background: linear-gradient(to bottom,rgb(37, 37, 37),rgb(110, 132, 93));    width: 17.5em;
    height: 17.5em;
    max-width: 100%;
    margin: 0 auto;
    img {
        width: 100%;
    }
`

const RecipeView = props => {
    const { strMeal, strMealThumb } = props.recipe;
    return (
        <RecipeViewWrapper>
            <p>How about...</p>
            <h1>{strMeal}</h1>
            <RecipeImageContainer>
                <img src={strMealThumb} />
            </RecipeImageContainer>
        </RecipeViewWrapper>
    );
};

const ErrorMessage = props => {
    return (
        <div>Error occcured :O</div>
    );
};

const RecipeSearchResults = props => {
    return props.isSelected ?
        props.recipes.length ?
            <RecipeView recipe={props.recipes[props.activeResult]} />
            :
            (
                <div>Finding {props.selectedCategory} recipes...</div>
            ) :
        null;
};

export default RecipeSearchResults;