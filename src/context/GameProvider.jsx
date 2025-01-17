import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [correctCount, setCorrectCount] = useState(0);

  return (
    <GameContext.Provider value={{ correctCount, setCorrectCount }}>
      {children}
    </GameContext.Provider>
  );
};
