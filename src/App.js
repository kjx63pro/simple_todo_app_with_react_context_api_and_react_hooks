import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddForm from './components/AddForm';

import TodoState from './context/todo/TodoState.js';

function App() {
  // const deleteTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  // const completeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted;
  //   setTodos(newTodos);
  // };

  return (
    <TodoState>
      <div className='app'>
        <h2>
          Simple Todo App with React Hooks{' '}
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
        </h2>
        <Todo />
        <hr />
        <AddForm />
      </div>
    </TodoState>
  );
}

export default App;
