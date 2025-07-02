import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export function AppContext({ children }) {
  const [searchInput, setSearchInput] = useState("");

  function onSearchStore(input) {
    const newSearchInput = input;
    setSearchInput(newSearchInput);
  }
  return (
    <GlobalContext.Provider value={{ onSearchStore, searchInput }}>
      {children}
    </GlobalContext.Provider>
  );
}
