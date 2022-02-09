import React, { useState } from "react";
import ActionsPanel from "./ActionsPanel";
import AddTodoForm from "./AddTodoForm";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";

/*
  TODO
  1. add todo ✔
  2. display todos ✔
  3. cross off todo ✔
  4. show number of active todos ✔
  5. filter all/active/complete ✔
  6. delete todo
  7. delete all complete ✔
    7.1 only show if at least one is complete
  8. button to toggle all on/off
*/

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState("All");

  const handleAddTodo = (content) => {
    setTodos([...todos, { content: content, crossedOut: false }]);
  };

  const handleCrossout = (index) => {
    setTodos(
      todos.map((t, i) =>
        i === index ? { content: t.content, crossedOut: !t.crossedOut } : t
      )
    );
  };

  const handleTodoFilterChange = () => {
    const todoFilter = document.querySelector("#todo-filter").value;
    setTodoFilter(todoFilter);
  };

  const renderListItems = () => {
    if (todoFilter === "All") {
      return todos.map((todo, index) => (
        <TodoItem
          content={todo.content}
          crossedOut={todo.crossedOut}
          handleCrossout={handleCrossout}
          index={index}
          key={index}
        ></TodoItem>
      ));
    } else if (todoFilter === "Active") {
      return todos.map((todo, index) =>
        !todo.crossedOut ? (
          <TodoItem
            content={todo.content}
            crossedOut={todo.crossedOut}
            handleCrossout={handleCrossout}
            index={index}
            key={index}
          ></TodoItem>
        ) : null
      );
    } else if (todoFilter === "Complete") {
      const newTodos = todos.map((todo, index) =>
        todo.crossedOut ? (
          <TodoItem
            content={todo.content}
            crossedOut={todo.crossedOut}
            handleCrossout={handleCrossout}
            index={index}
            key={index}
          ></TodoItem>
        ) : null
      );
      if (newTodos.every((todo) => todo === null)) {
        return <h1>Nothing to see here.</h1>;
      } else {
        return newTodos;
      }
    }
  };

  const handleDeleteAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.crossedOut));
  };

  return (
    <div className='content'>
      <ActionsPanel
        handleDeleteAllCompleted={handleDeleteAllCompleted}
      ></ActionsPanel>

      <div className='todo-list'>
        <AddTodoForm handleAddTodo={handleAddTodo}></AddTodoForm>

        <TodoFilters
          handleTodoFilterChange={handleTodoFilterChange}
        ></TodoFilters>

        <div className='todo-items'>{renderListItems()}</div>

        <div className='todo-active-tasks'>
          Active Tasks: {todos.filter((todo) => !todo.crossedOut).length}
        </div>
      </div>
    </div>
  );
}
