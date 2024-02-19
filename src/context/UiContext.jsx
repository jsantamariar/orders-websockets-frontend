import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const showMenu = () => {
    setHideMenu(false);
  };

  const onHideMenu = () => {
    setHideMenu(true);
  };

  return (
    <UiContext.Provider
      value={{
        showMenu,
        onHideMenu,
        hideMenu,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
