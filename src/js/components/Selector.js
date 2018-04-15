import React from 'react';
import styled from 'styled-components';
import { Refresh } from '../icons';

const Wrapper = styled.div`
    color: rgb(199, 141, 85);
    display: flex;
    justify-content: space-between;
    text-align: center;
    text-transform: uppercase; 
`;

const Button = styled.div`
    color: rgb(199, 141, 85);
    transition: all 250ms ease;
`;


const Selector = props => {
    return props.isCatSelected && !props.isRecipeSelected ?
        (
            <Wrapper onClick={props.reset}>
                <i />
                Showing "{props.selectedCategory}" recipes
                <Button>
                    {Refresh()}
                </Button>
            </Wrapper>
        ) :
        null;
};

export default Selector;