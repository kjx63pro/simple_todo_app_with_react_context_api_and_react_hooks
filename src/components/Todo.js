import React, { useContext } from 'react';
import './Todo.css';
import TodoContext from '../context/todo/TodoContex';

import { Button } from '@material-ui/core';

const Todo = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div className='todo'>
      {todoContext.todos?.length === 0 ? (
        <div className='todo__whenNothingtoList'>
          <p>
            There is no Todo at the moment.
            <br />
            Please Add New Todo...
          </p>
        </div>
      ) : (
        <div>
          {todoContext.todos?.map((todo, index) => (
            <div className='todo__list' key={index}>
              <p
                className={todo.isCompleted ? 'todo__isCompleted' : ''}
                onClick={() => {
                  todoContext.completeTodo(index);
                }}
              >
                {todo.text}
              </p>
              <div className='todo__button'>
                <Button
                  onClick={() => todoContext.deleteTodo(index)}
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
