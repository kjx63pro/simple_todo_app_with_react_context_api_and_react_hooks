import React from 'react';
import './Todo.css';

import { Button } from '@material-ui/core';

const Todo = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div className='todo'>
      {todos.length === 0 ? (
        <div className='todo__whenNothingtoList'>
          <p>
            There is no Todo at the moment.
            <br />
            Please Add New Todo...
          </p>
        </div>
      ) : (
        <div>
          {todos.map((todo, index) => (
            <div className='todo__list' key={index}>
              <p
                className={todo.isCompleted ? 'todo__isCompleted' : ''}
                onClick={() => {
                  completeTodo(index);
                }}
              >
                {todo.text}
              </p>
              <div className='todo__button'>
                <Button
                  onClick={() => deleteTodo(index)}
                  variant='contained'
                  color='secondary'
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
