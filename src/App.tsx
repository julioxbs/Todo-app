import { useContext } from "react";
import { FormTodo } from "./components/FormTodo";
import { themeContext } from "./context/Theme";

export const App = () => {
  const { darkTheme } = useContext(themeContext);
  
  return (
    <main className={`h-screen ${darkTheme ? 'bg-VeryBlue-dark' : 'bg-GrayishBlue-light'}`}>
      <FormTodo />
    </main>
  );
};
