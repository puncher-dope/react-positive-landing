import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Header.css";
import Header from "./Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
