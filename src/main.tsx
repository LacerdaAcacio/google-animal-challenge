import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global.js";
import App from "./App.js";
import HiddenSearchProvider from "./contexts/HiddenSearchProvider/index.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HiddenSearchProvider>
      <GlobalStyle />
      <App />
    </HiddenSearchProvider>
  </React.StrictMode>,
);
