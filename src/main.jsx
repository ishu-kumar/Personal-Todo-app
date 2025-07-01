import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AppProvider from "./context/AppContext.jsx";
import TodoListProvider from "./context/TodoList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <TodoListProvider>
          <App />
        </TodoListProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
