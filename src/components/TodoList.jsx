import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={props.removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
