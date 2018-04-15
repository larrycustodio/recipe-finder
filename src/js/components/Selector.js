import React, { Component } from 'react';
import styled from 'styled-components';
import { Refresh } from '../icons';

const Wrapper = styled.div`
    color: rgb(199, 141, 85);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 65vw;
    text-align: center;
    text-transform: uppercase;
    @media(min-width: 768px){
        max-width: 36.8vw;
    }
`;

const Button = styled.div`
    color: rgb(199, 141, 85);
    transition: all 250ms ease;
    margin-left: 0.5em;
`;


class Selector extends Component {
    render() {
        const {
            isCatSelected,
            isRecipeSelected,
            reset,
            selectedCategory } = this.props;
        return isCatSelected && !isRecipeSelected ?
            (
                <Wrapper onClick={reset}>
                    Selected: {selectedCategory}
                    <Button>
                        {Refresh()}
                    </Button>
                </Wrapper>
            ) :
            null;
    };
}


export default Selector;