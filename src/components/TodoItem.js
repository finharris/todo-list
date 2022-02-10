import React from "react";

export default function TodoItem(props) {
  return (
    <>
      <div className='todo-item'>
        <div
          className='todo-item-content'
          data-crossed-out={props.crossedOut}
          onClick={() => props.handleCrossout(props.index)}
        >
          {props.index + 1}. {props.content}
        </div>

        <div
          className='todo-item-delete'
          onClick={() => props.handleDeleteTodo(props.index)}
        >
          x
        </div>
      </div>
    </>
  );
}
