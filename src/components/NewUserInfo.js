import React from "react";

export default function NewUserInfo(props) {
  return (
    <>
      <div className='page-blocker'></div>
      <div className='new-user-info'>
        <h1>Welcome!</h1>
        <h3>Welcome to the best todo website there is.</h3>
        <h4>How to create and remove TODOS:</h4>
        <ol>
          <li>Type a todo into the text box at the top of the page.</li>
          <li>Press ENTER or CLICK the add button.</li>
          <li>
            Click a todo to cross it out or press the x when hovering over a
            todo to delete it.
          </li>
          <li>
            Click delete all or delete all completed buttons at the bottom of
            the page to remove all or all completed todos respectively.
          </li>
          <li>Enjoy!</li>
        </ol>
        <button
          className='new-user-info-understood'
          onClick={() => props.handleHasVisited(true)}
        >
          Undersood
        </button>
      </div>
    </>
  );
}
