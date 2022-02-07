import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

/*
  TODO
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if at least one is complete
  8. button to toggle all on/off
*/

export default function TodoList() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className='todo-list'>
      <AddTodoForm handleAddTodo={handleAddTodo}></AddTodoForm>

      <div className='todo-items'>
        {todos.map((todo, index) => (
          <TodoItem
            content={todo.content}
            crossedOut={todo.crossedOut}
            handleCrossout={handleCrossout}
            index={index}
            key={index}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}
