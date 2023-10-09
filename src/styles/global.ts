import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f1f1f1;
    min-height: 100vh;
  }
  
  h1 {
    color: #202124;
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  input {
    border-radius: 20px;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    background-color: #e5e5e5;
    padding: 0.5em 1em;
  }

  button {
    background-color: #4285f4;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2a75f3;
  }
`;
