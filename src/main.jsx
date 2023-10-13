import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./index.css";

import { MainPage } from "./pages/main/component.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
