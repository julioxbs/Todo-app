import { createContext, useState } from "react";
export const themeContext = createContext({
  darkTheme: false,
  setDarkTheme: (value: boolean) => {},
});

export const Theme = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </themeContext.Provider>
  );
};