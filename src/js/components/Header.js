import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    from {
        transform: translateY(10%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`

const HeaderWrapper = styled.header`
    animation: ${fadeUp} 1500ms ease forwards;

`;

const Title = styled.h1`
    color: rgb(255,255,255);
    font-size: 1.95em;
    text-align: center;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
`;

const SubTitle = styled.h4`
    color: rgb(125,240,129);
    font-size: 1.15em;
    letter-spacing: 4px;
    margin-bottom: 0.25em;
    text-align: center;
    text-transform: uppercase;
`;

const Tagline = styled.p`
    color: rgb(137,137,137);
    font-size: 0.85em;
    position: relative;
    line-height: 1.5em;
    margin: 0.55em 0 1.5em;
    padding: 0.25em 0;
    text-transform: uppercase;
    text-align: center;
    @media(min-width: 768px){
        font-size: 1.0em;
        max-width: 35vw;
        margin: 0.6em auto;
    }
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

const Header = props => {
    const { recipe } = props;
    return (
        <HeaderWrapper>
            <SubTitle>
                {!!recipe.strMeal? 'Recipe Lister' : 'BON APPÉTIT'}
            </SubTitle>
            <Title>
                {!!recipe.strMeal? recipe.strMeal : 'Recipe Lister'}
            </Title>
            <Tagline>
                {!!recipe.strMeal? 'Recipe Instructions' : `What's on the menu ${props.timeOfDay}?`}
            </Tagline>
        </HeaderWrapper>
    )
};

export default Header;