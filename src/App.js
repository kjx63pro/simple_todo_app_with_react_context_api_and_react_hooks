import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Todo from './components/Todo';
import AddForm from './components/AddForm';

import TodoState from './context/todo/TodoState.js';
import AppNavbar from './components/Navbar/AppNavbar';

function App() {
  return (
    <TodoState>
      <AppNavbar />
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
