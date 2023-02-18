import React from "react";
import ReactDOM from "react-dom/client";
import TicketApp from "./TicketApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UiContextProvider from "./context/UiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UiContextProvider>
    <BrowserRouter>
      <TicketApp />
    </BrowserRouter>
  </UiContextProvider>

  // </React.StrictMode>,
);
