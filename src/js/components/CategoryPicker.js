import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as icons  from '../icons';

const revealUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(10%);

    } to {
        opacity: 1;
        transform: translateY(0%);
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    svg {
        flex: 1 0 100%;
    }
`;

const Button = styled.div`
    animation: ${revealUp} 750ms ease 500ms forwards;
    align-items: flex-end;
    border-radius: 5px;
    color: rgb(154, 108, 62);
    cursor: pointer;
    display: flex;
    flex: 1 0 50%;
    flex-flow: row wrap;
    font-size: 0.85em;
    height: 14vh;
    justify-content: center;
    margin: 1.5%;
    max-width: 14vh;
    opacity: 0;
    text-transform: uppercase;
    text-align: center;
    svg {
        flex: 1 0 100%;
        filter: sepia(140%);
    }
    div {
        color: rgb(183, 161, 120);
        font-size: 1em;
        padding: 0.5em 0;
    }
    @media(min-width: 768px){
        flex: 1 0 18vw;
        height: 18vw;
        margin: 1em 0.5em;
        max-width: 18vw;
    }
    @media(min-width: 1280px){
        flex: 1 0 12vw;
        height: 12vw;
        max-width: 12vw;
    }
`;

const CategoryPicker = props => {
    return !props.isSelected ?
        (
            <Wrapper>
                {
                    props.choices.map(choice => {
                        const icon = icons[choice]? icons[choice]() : '';
                        return (
                        <Button
                            key={choice.toLowerCase()}
                            data-category={choice}
                            onClick={props.categoryClick}>
                            { icon }
                            <div>{choice}</div>
                        </Button>
                    )})
                }
            </Wrapper>
        )
        :
        null;
};

export default CategoryPicker;