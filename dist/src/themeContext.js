import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [card, setCard] = useState("darkCard");
  const [header, setHeader] = useState("darkHeader");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setCard((prevCard) =>
      prevCard === "lightCard" ? "darkCard" : "lightCard"
    );
    setHeader((prevHeader) =>
      prevHeader === "lightHeader" ? "darkHeader" : "lightHeader"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, card, header, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
