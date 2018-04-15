import React, { Component } from 'react';
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
    font-size: 0.7em;
    justify-content: space-between;
    opacity: 1;
    @media(min-width: 768px){
        font-size: 0.9em;
    }
    @media(min-width: 1024px){
        font-size: 1em;
    }
`;

const IngredientsWrapper = styled.div`
    width: 100%;
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

const Header = styled.h2`
    color: rgb(137,137,137);
    display: inline-block;
    margin-bottom: 0;
    padding: 0.37em 0;
    position: relative;
    &:before {
        content: "";
        background-color: rgb(137,137,137);
        height: 1px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        content: "";
        background-color: rgb(137,137,137);
        height: 1px;
        left: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;

const InstructionsWrapper = styled.div`
    max-height: 35vh;
    overflow-y: scroll; 
    @media(min-width:768px){
        flex: 2.5 0;
    }
`;

const HomeButton = styled.div`
    color: rgb(118, 222, 121);
    cursor: pointer;
    flex: 1 0 100%;
    font-size: 1em;
    font-weight: 900;
    padding: 1em 0;
    text-align: center;
    text-transform: uppercase;
`;

class RecipeInstructions extends Component {
    constructor(props) {
        super(props);
        this.windowScroll = this.windowScroll.bind(this);
        this.state = {
            isScrolledToBottom: false
        };
    }
    windowScroll(e){
        console.log('scroll scroll');
    };
    componentDidMount(){
        window.addEventListener('scroll', function(e){this.windowScroll()}, false);
    }
    render() {
        const steps = sanitizeInstructions(this.props.instructions);
        const { ingredients, measurements } = steps;
        return this.props.isRecipeSelected && steps.idMeal ?
            <Wrapper>
                <IngredientsWrapper>
                    <Header>You will need</Header>
                    <ul>{ingredients.map((ingredient, index) => (
                        <li
                            key={`${ingredient}-${index}`}>
                            {`${measurements[index]} ${ingredient}`}
                        </li>
                    ))}
                    </ul>
                </IngredientsWrapper>
                <InstructionsWrapper>
                    <Header>Instructions</Header>
                    {
                        steps.strInstructions.split('.').map((sentence, i) => (
                            !parseInt(sentence) ?
                                <p key={`${sentence.substr(0, 3)}-${i}`}>
                                    {sentence.trim()}
                                </p> :
                                null
                        ))
                    }
                </InstructionsWrapper>
                <HomeButton onClick={this.props.reset}>
                    <span>Back to home</span>
                </HomeButton>
            </Wrapper>
            :
            null;
    }
}

export default RecipeInstructions;