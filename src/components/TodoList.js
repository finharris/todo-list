import React, { useState, useEffect } from "react";
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
  6. delete todo ✔
  7. delete all complete ✔
  8. make long todos work 
*/

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState("All");

  useEffect(() => {
    const todoListData = JSON.parse(
      window.localStorage.getItem("todo-list-data")
    );
    setTodos(todoListData === null ? [] : todoListData);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todo-list-data", JSON.stringify(todos));
  }, [todos]);

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

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((t, i) => i !== index);
    setTodos(newTodos); // SOME BUG WHERE THIS DOESNT SEEM TO BE BEING CALLED
  };

  const handleTodoFilterChange = () => {
    const todoFilter = document.querySelector("#todo-filter").value;
    setTodoFilter(todoFilter);
  };

  const renderListItems = () => {
    if (todos.length === 0) {
      return <h1>Nothing to see here.</h1>;
    }
    if (todoFilter === "All") {
      return todos.map((todo, index) => (
        <TodoItem
          content={todo.content}
          crossedOut={todo.crossedOut}
          handleCrossout={handleCrossout}
          handleDeleteTodo={handleDeleteTodo}
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
            handleDeleteTodo={handleDeleteTodo}
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
            handleDeleteTodo={handleDeleteTodo}
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

  const handleDeleteAll = () => {
    if (todos.length !== 0) {
      const confimation = window.confirm(
        "Are you sure you want to delete all todos? (this canno't be undone)"
      );
      if (confimation) {
        setTodos([]);
      } else {
        return;
      }
    }
  };

  return (
    <div className='content'>
      <div className='todo-list'>
        <header>
          <AddTodoForm handleAddTodo={handleAddTodo}></AddTodoForm>
          <TodoFilters
            handleTodoFilterChange={handleTodoFilterChange}
          ></TodoFilters>
        </header>

        <div className='todo-items'>{renderListItems()}</div>

        <footer>
          <button
            className='action-button'
            onClick={() => handleDeleteAllCompleted()}
          >
            Delete All Completed
          </button>

          <button className='action-button' onClick={() => handleDeleteAll()}>
            Delete All
          </button>

          <div className='todo-active-tasks'>
            Active Tasks: {todos.filter((todo) => !todo.crossedOut).length}
          </div>
        </footer>
      </div>
    </div>
  );
}
