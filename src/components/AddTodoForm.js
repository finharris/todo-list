import React from "react";

export default function AddTodoForm(props) {
  const handleEnterPress = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("add-todo-submit").click();
    }
  };

  const internalHandleTodo = () => {
    const todoInput = document.querySelector("#add-todo-content");
    if (todoInput.value.length > 45) {
      alert("Todo must not exceed 45 characters.");
      return;
    }
    if (todoInput.value.length === 0) {
      return;
    }
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
        onKeyUp={() => handleEnterPress()}
      />
      <button id='add-todo-submit' onClick={() => internalHandleTodo()}>
        Add
      </button>
    </div>
  );
}
