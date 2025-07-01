import { useContext } from "react";
import TodoInput from "../components/TodoInput";
import { TodoListContext } from "../context/TodoList";
import Todo from "../components/Todo";

const Home = () => {
  const { todoList, handleToggle, deleteTodo } = useContext(TodoListContext);

  return (
    <div className="w-full h-screen flex justify-center bg-gray-800 text-gray-100 relative">
      <section className="w-100 h-[100%] flex flex-col gap-4 pt-10 pb-25 overflow-auto  scrollbar-hide">
        {todoList.map((todos, indx) => (
          <Todo key={indx} data={todos} onToggle={handleToggle} onDelete={deleteTodo} />
        ))}
      </section>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <TodoInput />
      </div>
    </div>
  );
};

export default Home;
