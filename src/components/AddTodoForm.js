import React from "react";

export default function AddTodoForm(props) {
  return (
    <div className='add-todo-form'>
      <input type='text' name='add-todo-content' id='add-todo-content' />
      <input
        type='button'
        value='Add'
        className='add-todo-submit'
        onClick={() =>
          props.handleAddTodo(document.querySelector("#add-todo-content").value)
        }
      />
    </div>
  );
}
