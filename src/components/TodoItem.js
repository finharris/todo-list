import React from "react";

export default function TodoItem(props) {
  return (
    <>
      <div
        className='todo-item'
        onClick={() => props.handleCrossout(props.index)}
      >
        <div className='todo-item-content' data-crossed-out={props.crossedOut}>
          {props.index + 1}. {props.content}
        </div>
      </div>
    </>
  );
}
