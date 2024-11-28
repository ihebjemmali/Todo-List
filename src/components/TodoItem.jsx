import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <span>
        {props.todo.title} - {props.todo.body}
      </span>
      <button onClick={() => props.removeTodo(props.todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
