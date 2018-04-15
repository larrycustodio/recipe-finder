import styled, { keyframes, injectGlobal } from 'styled-components';
const boilUp0 = keyframes`
    0% {
      opacity: 1;
      transform: translateY(16%);
    }
    25%{
      transform: translateY(12%);    
    }
    50%{
      transform: translateY(8%);
    }
    75%{
      opacity: 0.5;
      transform: translateY(4%);
    }
    100%{
      opacity: 0;
      transform: translateY(0%);
    }
`;

const boilUp2 = keyframes`
    0% {
        opacity: 1;
        transform: translateY(50%);
    }
    25% {
        transform: translateY(40%);
    }
    50% {
        transform: translateY(30%);
    }
    75% {
        opacity: 0.5;
        transform: translateY(20%);
    }
    100% {
        opacity: 0;
        transform: translateY(10%);
    }
`;


const boilUp3 = keyframes`
    0% {
        opacity: 1;
        transform: translateY(20%);
    }
    25% {
        transform: translateY(15%);
    }
    50% {
        transform: translateY(10%);
    }
    75% {
        opacity: 0.5;
        transform: translateY(5%);
    }
    100% {
        opacity: 0;
        transform: translateY(0%);
    }
`;

// Global CSS
injectGlobal`
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  #app {
      background-color: rgb(46, 46, 46);
      height: 100vh;
      overflow-y: scroll;
  }
  .pot {
    fill: #fff;
  }
  .boil-0 {
    animation: ${boilUp0} 500ms linear infinite;
    transform-origin: center;  
  }
  .boil-2 {
    animation: ${boilUp2} 800ms linear infinite;
    transform-origin: center;
  }
  .boil-3 {
    animation: ${boilUp3} 650ms linear infinite;
    transform-origin: center;  
  }
`;

// Set universal colors
const colors = {
    bg: 'rgb(25,25,25)',
    white: 'rgb(255,255,255)',
    green: 'rgb(125,240,129)',
    brown: 'rgb(154, 108, 62)',
    gray: 'rgb(137,137,137)',
    form: {
        main: 'rgb(125,125,125)',
        border: 'rgb(65,65,65)',
        focused: 'rgb(137,137,137)'
    }
};

const ipad = '768px';
const desktop = '1280px';

/*
 * Components
 */
export const Wrapper = styled.main`
    color: ${colors.white};
    font-family: 'Lato', 'Helvetica Neue', sans-serif;
    height: 100vh;
    padding: 2em 4em;
`;

/*
 * Site Form
 */
export const Form = styled.form`
    margin-top: 1.5em;
    label {
        color: ${colors.green};
        display: block;
        font-size: 0.80rem;
        font-weight: 700;
        position: relative;
        text-align: center;
        text-transform: uppercase;
    }
`;

export const FormInput = styled.input`
    border-width: 0 0 1px 0;
    border-color: ${colors.form.border};
    background-color: transparent;
    color: ${colors.form.main};
    padding: 1em 0 0.25em;
    position: relative;
    width: 100%;
    transition: all 250ms ease;
    &:hover,
    &:active,
    &:focus {
        color: ${colors.form.focused};
        border-color: ${colors.form.focused};
        outline:none;
    }
`;

export const FormButton = styled.button`
    background-color: transparent;
    border: 1px solid ${colors.gray};
    color: ${colors.gray};
    display: block;
    font-size: 0.75em;
    padding: 0.35em;
    margin-top: 0.75em;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    transition: all 250ms ease;
    &:focus,
    &:active,
    &:hover {
        outline: none;
        background-color: ${colors.gray};
        color: ${colors.white};
    }
`;