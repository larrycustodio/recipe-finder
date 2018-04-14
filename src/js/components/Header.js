import React from 'react';
import { Title, SubTitle, Tagline } from '../styles';

const Header = props => (
    <div>
        <SubTitle>bon appétit</SubTitle>
        <Title>Recipe Lister</Title>
        <Tagline>What's on the menu {props.timeOfDay}?</Tagline>
    </div>
);

export default Header;