import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./styles/global.js";
import App from "./App.js";
import HiddenSearchProvider from "./contexts/HiddenSearchProvider/index.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

const root = ReactDOM.createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HiddenSearchProvider>
        <GlobalStyle />
        <App />
      </HiddenSearchProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
