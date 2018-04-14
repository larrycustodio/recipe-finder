import React from 'react';
import {
    CategoryWrapper,
    CategoryButton
} from '../styles';

const CategoryPicker = props => {
    return !props.isSelected ?
        (
            <CategoryWrapper>
                {
                    props.choices.map(choice => (
                        <CategoryButton
                            key={choice.toLowerCase()}
                            data-category={choice}
                            onClick={props.categoryClick}>
                            <span>{choice}</span>
                        </CategoryButton>
                    ))
                }
            </CategoryWrapper>
        )
        :
        null;
};

export default CategoryPicker;