import React, { useState } from "react";
import todolist from "./data/dummyData";
import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";

const App = () => {
  const [todos, setTodos] = useState(todolist);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="todo-list main">Todo List App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
