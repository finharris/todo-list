import React from "react";

export default function TodoItem(props) {
  const handleCopyContent = (e) => {
    const todoItemCopy = e.target.parentElement;
    todoItemCopy.classList.toggle("hidden");
    const interval = setInterval(() => {
      todoItemCopy.classList.toggle("hidden");
      clearInterval(interval);
    }, 200);

    navigator.clipboard.writeText(props.content).then(
      function () {
        return;
      },
      function (err) {
        console.error(err);
      }
    );
  };

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

        <div className='todo-item-actions'>
          <div
            className='todo-item-copy todo-item-hidden hidden'
            onClick={(e) => handleCopyContent(e)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-copy'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <rect x='8' y='8' width='12' height='12' rx='2'></rect>
              <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
            </svg>
          </div>
          <div
            className='todo-item-delete todo-item-hidden'
            onClick={() => props.handleDeleteTodo(props.index)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-trash'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <line x1='4' y1='7' x2='20' y2='7'></line>
              <line x1='10' y1='11' x2='10' y2='17'></line>
              <line x1='14' y1='11' x2='14' y2='17'></line>
              <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path>
              <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
