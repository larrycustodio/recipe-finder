import React from 'react';

import {
    Form,
    FormInput,
    FormButton
} from '../styles';

const FormInputLocation = props => {
    return (
        <FormInput name="meal" id="mealSearchString" type="text" onChange={props.onSearchStringChange} />
    )
};

const UserForm = props => {
    return (
        <Form onSubmit={props.submitHandler}>
            <FormInputLocation onSearchStringChange={props.onSearchStringChange} />
            <FormButton>Find Me a Recipe</FormButton>
        </Form>
    );
}

export default UserForm;