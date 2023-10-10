import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    min-height: 100vh;
  }
  
  h1 {
    color: #202124;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  input {
    border-radius: 1.25rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    margin: 0.5rem 0;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    background-color: #e5e5e5;
    padding: 0.5rem 1.5rem;
    width: 100%;
  }

  button {
    background-color: #e5e5e5;
    color: white;
    padding: 0.65rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
    color: #000;
    font-weight: bold;


    &:hover {
      background-color: #9c9c9c;
    }
  }
`;
