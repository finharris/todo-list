import React, { useEffect } from "react";

export default function AddTodoForm(props) {
  useEffect(() => {
    document
      .getElementById("add-todo-content")
      .addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
          document.getElementById("add-todo-submit").click();
        }
      });
  }, []);

  const internalHandleTodo = () => {
    const todoInput = document.querySelector("#add-todo-content");
    props.handleAddTodo(todoInput.value);
    todoInput.value = "";
  };

  return (
    <div className='add-todo-form'>
      <input
        type='text'
        name='add-todo-content'
        placeholder='I am going TODO...'
        id='add-todo-content'
      />
      <button id='add-todo-submit' onClick={() => internalHandleTodo()}>
        Add
      </button>
    </div>
  );
}
