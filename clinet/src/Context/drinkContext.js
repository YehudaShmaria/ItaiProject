import React, { useContext, createContext, useState } from "react";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [money, setMoney] = useState();
  return (
    <DrinkContext.Provider value={{ money, setMoney }}>
      {children}
    </DrinkContext.Provider>
  );
};
export const DrinkState = () => {
  return useContext(DrinkContext);
};

export default DrinkProvider;
