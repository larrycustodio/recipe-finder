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

const fadeOutLeft = keyframes`
    0% {
        opacity: 1;
        transform: translate(0,0);
    }
    100% {
        opacity: 0;
        transform: translate(-10%,0);
    }
`;

const zoomHighlight = keyframes`
0% { transform: rotate(0deg); }
80% { transform: rotate(0deg); }
85% { transform: rotate(5deg); }
95% { transform: rotate(-5deg); }
100% { transform: rotate(0deg); }
`;
// Global CSS
injectGlobal`
  * {
   box-sizing: border-box;
  }
  
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
  .swipeable {
      transition: all 450ms ease;
  }
  .swipe--rejected {
    animation: 500ms ${fadeOutLeft} ease forwards;
  }
  .swipe--accepted {
    animation: 1250ms ${zoomHighlight} ease forwards;
  }
`;