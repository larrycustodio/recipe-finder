import styled, { injectGlobal } from 'styled-components';

// Global CSS
injectGlobal`
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  #app {
      background-color: rgb(46, 46, 46);
      background-image: url("https://www.transparenttextures.com/patterns/black-paper.png");
      height: 100vh;
      overflow-y: scroll;
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
 * Site Header
 */
export const Title = styled.h1`
    color: ${colors.white};
    font-size: 1.95em;
    text-align: center;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
`;

export const SubTitle = styled.h4`
    color: ${colors.green};
    font-size: 1.15em;
    letter-spacing: 4px;
    margin-bottom: 0.25em;
    text-align: center;
    text-transform: uppercase;
`;

export const Tagline = styled.p`
    color: ${colors.gray};
    font-size: 0.85em;
    position: relative;
    line-height: 1.5em;
    margin: 0.55em 0;
    padding: 0.25em 0;
    text-transform: uppercase;
    text-align: center;
    &:before {
        content: "";
        background-color: ${colors.gray};
        height: 1px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        content: "";
        background-color: ${colors.gray};
        height: 1px;
        left: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
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