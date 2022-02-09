import React from "react";

export default function TodoFilters(props) {
  return (
    <div className='todo-filters'>
      <label htmlFor='todo-filter'>Filter: </label>
      <select
        name='todo-filter'
        id='todo-filter'
        onChange={() => props.handleTodoFilterChange()}
      >
        <option value='All'>All</option>
        <option value='Active'>Active</option>
        <option value='Complete'>Complete</option>
      </select>
    </div>
  );
}
