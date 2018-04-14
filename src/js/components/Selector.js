import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: rgb(199, 141, 85);
    display: flex;
    justify-content: space-between;
    text-align: center;
    text-transform: uppercase; 
`;

const Button = styled.div`
    color: rgb(199, 141, 85);
`;

const Selector = props => {
    return props.isSelected?
    (
        <Wrapper>
            <i />
            Showing "{props.selectedCategory}" recipes
            <Button onClick={props.reset}>
                x
            </Button>
        </Wrapper>
    ) :
    null;
};

export default Selector;