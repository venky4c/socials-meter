import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [card, setCard] = useState("darkCard");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setCard((prevCard) =>
      prevCard === "lightCard" ? "darkCard" : "lightCard"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, card, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
