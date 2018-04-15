import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import * as icons from '../icons'; 
import { Swipeable } from 'react-touch';

const hintLeft = keyframes`
    0% {
        transform: translateX(0%);
    }
    25% {
        transform: translateX(-10%);
    }
    50% {
        transform: translateX(5%);
    }
    75% {
        transform: translateX(-10%);
    }
    100% {
        transform: translateX(0%);
    }
`;

const hintRight = keyframes`
    0% {
        transform: translateX(0%);
    }
    25% {
        transform: translateX(10%);
    }
    50% {
        transform: translateX(-5%);
    }
    75% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0%);
    }
`;

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
    background: rgb(83, 169, 120);
    width: 247px;
    height: 247px;
    max-width: 100%;
    margin: 0 0.25em 1em;
    img {
        height: 100%;
    }
    @media (min-width: 768px){
        width: 365px;
        height: 365px;    
    }
`;

const RecipePicker = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    
`;

const Button = styled.div`
    animation: ${props => props.theme.animate};
    color:  ${props => props.theme.main};
    font-size: 4.5em;
    text-transform: uppercase;
`;

Button.defaultProps = {
    theme: {
        main: 'rgb(126,126,126)'
    }
};

const red = {
    animate: `${hintLeft} 2s linear infinite`,
    main: 'rgb(208, 44, 44)'
}

const green = {
    animate: `${hintRight} 2s linear infinite`,
    main: 'rgb(85, 214, 113)'
}
const Loader = styled.div`
    align-items: flex-end;
    display: flex;
    flex-flow: row wrap;
    height: 35vh;
    justify-content: center;
    p{
        flex: 1 0 100%;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
    }
    svg {
        flex: 1 0 100%;
        height: 100px;
        width: auto;
    }
`
const RecipeView = props => {
    const { strMeal, strMealThumb } = props.recipe;

    return (
        <RecipeViewWrapper>
            <p>How about...</p>
            <h1>{strMeal}</h1>
            <RecipePicker>
                <ThemeProvider theme={red}>
                    <Button onClick={props.deny}>&laquo;</Button>
                </ThemeProvider>
                <RecipeImageContainer>
                    <Swipeable
                        onSwipeLeft={props.deny}
                        onSwipeRight={props.accept}>
                        <img src={strMealThumb} />
                    </Swipeable>
                </RecipeImageContainer>
                <ThemeProvider theme={green}>
                    <Button onClick={props.accept}>&raquo;</Button>
                </ThemeProvider>
            </RecipePicker>
        </RecipeViewWrapper>
    );
};

const RecipeInstructions = props => {
    return (
        <div>
            Just follow these steps!
        </div>
    );
};

const ErrorMessage = props => {
    return (
        <div>Error occcured :O</div>
    );
};

const RecipeSearchResults = props => {
    return props.isCategorySelected ?
        props.recipes.length ?
            <RecipeView
                deny={props.onDeny}
                accept={props.onAccept}
                recipe={props.recipes[props.activeResult]} />
            :
            <Loader>
                {icons.loading()}
                <p>Finding {props.selectedCategory} recipes...</p>
            </Loader>
        :
        null;
};

export default RecipeSearchResults;