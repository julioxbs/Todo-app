import { createContext, useEffect, useState } from "react";
export const themeContext = createContext({
  darkTheme: false,
  setDarkTheme: (value: boolean) => {},
});

export const Theme = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const localTheme = localStorage.getItem("darkTheme");
    return localTheme ? JSON.parse(localTheme) : false;
  });
  
  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </themeContext.Provider>
  );
};