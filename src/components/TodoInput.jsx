import React, { useContext, useState } from "react";
import { TodoListContext } from "../context/TodoList";

const TodoInput = () => {
  const [task, setTask] = useState("");

  const { todoList, add } = useContext(TodoListContext);

  const handdleSubmit = async (e) => {
    e.preventDefault();

    const todo = task.toString().trim().toLowerCase();

    if (todo.length <= 0) {
      return;
    }

    add(todo);

    setTask("");
  };

  return (
    <div>
      <form onSubmit={(e) => handdleSubmit(e)}>
        <div className="flex w-100 items-center justify-center h-12 bg-white rounded-md backdrop-blur-md">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-blue-400 text-gray-200 bg-gray-500 border-2 h-full flex-1 px-4 rounded-bl-md rounded-tl-md text-xl focus:outline-none focus:ring-0 focus:border-gray-400  placeholder:text-gray-300 placeholder:text-base"
            type="text"
            placeholder="Write Task!"
          />
          <button className="h-full bg-blue-700 px-6 rounded-br-md rounded-tr-md cursor-pointer">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
