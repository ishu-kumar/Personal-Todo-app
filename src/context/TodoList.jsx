import { createContext, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

export const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const hasMounted = useRef(false); // 👈 flag to prevent early saving

  const add = async (text) => {
    const newTodo = {
      id: nanoid(8),
      text: text,
      complete: false,
      w_time: new Date().toLocaleString(),
    };
    setTodoList((prev) => [...prev, newTodo]);
  };
  const handleToggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("todoList");
    if (saved) {
      setTodoList(JSON.parse(saved));
    } else {
      console.log("no todos");
    }
  }, []);

  // Save only AFTER initial load
  useEffect(() => {
    if (hasMounted.current) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      hasMounted.current = true; // ⏱️ set flag after first run
    }
  }, [todoList]);

  return (
    <TodoListContext.Provider
      value={{ todoList, add, handleToggle, deleteTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
