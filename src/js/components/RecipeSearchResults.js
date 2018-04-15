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

const fadeUp = keyframes`
    0%{
        transform: translateY(15%);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`;

const RecipeViewWrapper = styled.div`
    p {
        animation: ${fadeUp} 650ms ease forwards;
        color: rgb(125,240,129);
        margin-bottom: 0;
        font-size: 0.75em;
        opacity: 0;
        text-transform: uppercase;
        text-align: center;
    }
    h1 {
        animation: ${fadeUp} 650ms ease 400ms forwards;
        font-size: 0.85em;
        font-weight: 700;
        opacity: 0;
        margin-bottom: 0.5em;
        text-transform: uppercase;
        text-align: center;
    }
`;

const RecipePicker = styled.div`
align-items: center;
display: flex;
justify-content: space-around;
`;

const RecipeImageContainer = styled.div`
    animation: ${fadeUp} 650ms ease 400ms forwards;
    background: rgb(83, 169, 120);
    height: 247px;
    margin: 0 0.25em 1em;
    opacity: 0;
    max-width: 100%;
    width: 247px;
    img {
        height: 100%;
    }
    @media (min-width: 768px){
        width: 365px;
        height: 365px;    
    }
`;

const Button = styled.div`
    animation: ${props => props.theme.animate};
    color:  ${props => props.theme.main};
    cursor: pointer;
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
    const { isRecipeSelected } = props;

    return (
        <RecipeViewWrapper>
            {
                !isRecipeSelected ?
                    (<div>
                        <p>How about...</p>
                        <h1>{strMeal}</h1>
                    </div>) : null
            }
            <RecipePicker>
                {!isRecipeSelected ?
                    <ThemeProvider theme={red}>
                        <Button onClick={props.deny}>&laquo;</Button>
                    </ThemeProvider>
                    : null
                }
                <RecipeImageContainer>
                    <Swipeable
                        onSwipeLeft={props.deny}
                        onSwipeRight={props.accept}>
                        <img src={strMealThumb} />
                    </Swipeable>
                </RecipeImageContainer>
                {!isRecipeSelected ?
                    <ThemeProvider theme={green}>
                        <Button onClick={props.accept}>&raquo;</Button>
                    </ThemeProvider>
                    : null
                }
            </RecipePicker>
        </RecipeViewWrapper>
    );
};

const ErrorMessage = props => {
    return (
        <div>Error occcured :O</div>
    );
};

const RecipeSearchResults = props => {
    const onDeny = props.selectedCategory == 'random'? props.randomClick : props.onDeny;

    return props.isCategorySelected ?
        props.recipes.length ?
            <RecipeView
                isRecipeSelected={props.isRecipeSelected}
                deny={onDeny}
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