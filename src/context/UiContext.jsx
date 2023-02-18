import React, { createContext, useState } from "react";

export const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const onShowMenu = () => {
    setHideMenu(false);
  };

  const onHideMenu = () => {
    setHideMenu(true);
  };

  return (
    <UiContext.Provider
      value={{
        onShowMenu,
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

export default UiContextProvider;
