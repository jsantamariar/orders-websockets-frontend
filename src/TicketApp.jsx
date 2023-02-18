import React from "react";
import UiProvider from "./context/UiContext";
import { SocketProvider } from "./hooks/SocketContext";
import RouterPage from "./pages/RouterPage";

const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  );
};

export default TicketApp;
