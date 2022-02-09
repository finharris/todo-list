import React from "react";

export default function ActionsPanel(props) {
  return (
    <div className='actions-panel'>
      <h1>Actions</h1>
      <button
        className='action-delete-all-completed'
        onClick={() => props.handleDeleteAllCompleted()}
      >
        Delete All Completed
      </button>
    </div>
  );
}
