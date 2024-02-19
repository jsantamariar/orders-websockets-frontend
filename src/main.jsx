import React from "react";
import ReactDOM from "react-dom/client";
import TicketApp from "./TicketApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UiProvider } from "./context/UiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UiProvider>
    <BrowserRouter>
      <TicketApp />
    </BrowserRouter>
  </UiProvider>

  // </React.StrictMode>,
);
