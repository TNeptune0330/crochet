import React, { createContext, useState } from 'react';

// Create a context
const GlobalListContext = createContext();

// Create a provider component
const GlobalListProvider = ({ children }) => {
  const [globalList, setGlobalList] = useState([]);

  const addItem = (item) => {
    setGlobalList((prevList) => [...prevList, item]);
  };

  const removeItem = (item) => {
    setGlobalList((prevList) => prevList.filter(i => i !== item));
  };

  return (
    <GlobalListContext.Provider value={{ globalList, addItem, removeItem }}>
      {children}
    </GlobalListContext.Provider>
  );
};

export { GlobalListContext, GlobalListProvider };
