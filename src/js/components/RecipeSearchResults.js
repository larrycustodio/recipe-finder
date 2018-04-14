import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Swipeable } from 'react-touch';

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
    margin: 0 auto 1em;
    img {
        width: 100%;
    }
`;

const RecipePicker = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Button = styled.div`
    padding: 0.5em;
    text-transform: uppercase;

    border: 2px solid ${props => props.theme.main};
    color:  ${props => props.theme.main};
`;

Button.defaultProps = {
    theme: {
        main: 'rgb(126,126,126)'
    }
};

const red = {
    main: 'rgb(208, 44, 44)'
}

const green = {
    main: 'rgb(85, 214, 113)'
}

const RecipeView = props => {
    const { strMeal, strMealThumb } = props.recipe;

    return (
        <RecipeViewWrapper>
            <p>How about...</p>
            <h1>{strMeal}</h1>
            <RecipeImageContainer>
                <Swipeable
                    onSwipeLeft={props.deny}
                    onSwipeRight={props.accept}>
                    <img src={strMealThumb} />
                </Swipeable>
            </RecipeImageContainer>
            <RecipePicker>
                <ThemeProvider theme={red}>
                    <Button onClick={props.deny}>Nay</Button>
                </ThemeProvider>
                <ThemeProvider theme={green}>
                    <Button onClick={props.accept}>Yay</Button>
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
            <div>Finding {props.selectedCategory} recipes...</div>
        :
        null;
};

export default RecipeSearchResults;