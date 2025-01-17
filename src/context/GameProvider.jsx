import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [correctCount, setCorrectCount] = useState(0);

  return (
    <GameConGameProvidertext.Provider value={{ correctCount, setCorrectCount }}>
      {children}
    </GameConGameProvidertext.Provider>
  );
};
