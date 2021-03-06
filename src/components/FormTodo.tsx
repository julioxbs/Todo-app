import { FormEvent, useContext, useEffect, useState } from "react";
import { ListTodo } from "./ListTodo";
import { themeContext } from "../context/Theme";

export const FormTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const { darkTheme, setDarkTheme } = useContext(themeContext);

  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      todos.find((todo: {text: string}) => todo.text.toLowerCase() === inputTodo.toLowerCase())
    )
      return alert("Todo already exists");

    if (inputTodo) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: inputTodo,
          completed: false,
        },
      ]);

      setInputTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <header
      className={`${
        darkTheme
          ? "md:bg-desktop-dark bg-mobile-dark"
          : "md:bg-desktop-light bg-mobile-light"
      } object-cover h-[190px] bg-no-repeat w-full bg-cover bg-center relative lg:px-[10rem] xl:px-[22rem] md:px-[10rem] px-4 py-2`}
    >
      <div className="content flex items-center justify-between mt-5">
        <h1 className="uppercase tracking-[5px] font-bold text-white text-2xl">
          Todo
        </h1>

        <span
          className="cursor-pointer"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          <img
            className="w-5 cursor-pointer"
            src={darkTheme ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}
            alt={darkTheme ? "moon" : "sun"}
          />
        </span>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${
          darkTheme ? "bg-DesaturatedBlue-dark" : "bg-white"
        } py-2 px-5 rounded-md flex items-center mt-5`}
      >
        <span className="border-solid border-2 rounded-full w-6 h-6 "></span>

        <input
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          className={`w-full p-2 bg-transparent focus:outline-0 ${
            darkTheme
              ? "placeholder:text-white text-white"
              : "placeholder:text-Grayish-Blue"
          }`}
          type="text"
          placeholder="Create a new todo.."
        />
      </form>

      <ListTodo todos={todos} setTodos={setTodos} />
    </header>
  );
};
