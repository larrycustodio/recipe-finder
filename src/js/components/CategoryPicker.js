import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 1px solid rgb(154, 108, 62);
    border-radius: 5px;
    color: rgb(154, 108, 62);
    flex: 1 0 50%;
    font-size: 0.85em;
    height: 15.5vh;
    max-width: 46.19%;
    margin: 1.5%;
    text-transform: uppercase;
    text-align: center;
    span {
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
                    props.choices.map(choice => (
                        <Button
                            key={choice.toLowerCase()}
                            data-category={choice}
                            onClick={props.categoryClick}>
                            <span>{choice}</span>
                        </Button>
                    ))
                }
            </Wrapper>
        )
        :
        null;
};

export default CategoryPicker;