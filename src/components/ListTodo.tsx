import { useContext } from "react";
import { themeContext } from "../context/Theme";

interface ListTodoProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  setTodos: (todos: any) => void;
}

export const ListTodo = ({ todos, setTodos }: ListTodoProps) => {
  const { darkTheme } = useContext(themeContext);
  
  const handleComplete = (id: number) => {
    let currentTodo = todos.find((todo) => todo.id === id);
    currentTodo!.completed = !currentTodo?.completed;
    setTodos([...todos]);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <ul className="w-full shadow-md flex flex-col mt-7">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between px-5 p-3 border-b-[1px] ${darkTheme ? 'bg-DesaturatedBlue-dark border-b-slate-600' : 'bg-white'} rounded-t text-VeryDarkGrayish-Blue`}
          >
            <div className="flex items-center gap-2">
              <span
                onClick={() => handleComplete(todo.id)}
                className={`cursor-pointer border-solid border-[1px] rounded-full w-6 h-6 flex items-center justify-center ${
                  todo.completed ? "bg-active" : ""
                }`}
              >
                {todo?.completed ? (
                  <img src="/images/icon-check.svg" alt="" />
                ) : null}
              </span>

              <p
                className={`text-sm ${
                  todo.completed ? "line-through text-gray-300" : ""
                } ${darkTheme ? "text-white" : "text-VeryDarkGrayish-Blue"}`}
              >
                {todo.text}
              </p>
            </div>

            <span onClick={() => handleDelete(todo.id)}>
              <img
                className="w-4 cursor-pointer"
                src="/images/icon-cross.svg"
                alt="delete button"
              />
            </span>
          </li>
        ))}

        <li className={`flex items-center justify-between px-5 p-3 ${darkTheme ? 'bg-DesaturatedBlue-dark' : 'bg-white'} text-[15px] text-gray-400`}>
          <span>
            {todos?.length - todos?.filter((todo) => todo.completed).length}{" "}
            items left
          </span>

          <div className={`md:flex hidden items-center gap-3 font-bold ${darkTheme ? 'bg-DesaturatedBlue-dark' : 'bg-white'} text-gray-400 text-[15px]`}>
            <p className="cursor-pointer text-VeryDarkGrayish-Blue hover:text-DarkGrayish-Blue">
              All
            </p>
            <p className="cursor-pointer hover:text-DarkGrayish-Blue">Active</p>
            <p className="cursor-pointer hover:text-DarkGrayish-Blue">
              Completed
            </p>
          </div>

          <span onClick={() => clearCompleted()} className="cursor-pointer">
            Clear Completed
          </span>
        </li>
      </ul>

      <div className={`flex md:hidden items-center shadow-md justify-center gap-3 p-5 font-bold mt-5 ${darkTheme ? 'bg-DesaturatedBlue-dark' : 'bg-white'} rounded text-gray-400 text-[15px]`}>
        <p className="cursor-pointer text-VeryDarkGrayish-Blue hover:text-DarkGrayish-Blue">
          All
        </p>
        <p className="cursor-pointer hover:text-DarkGrayish-Blue">Active</p>
        <p className="cursor-pointer hover:text-DarkGrayish-Blue">Completed</p>
      </div>
    </div>
  );
};
