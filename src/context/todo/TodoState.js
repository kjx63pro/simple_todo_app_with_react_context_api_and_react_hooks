import React, { useReducer } from 'react';
import TodoContext from './TodoContex';
import todoReducer from './todoReducer';

import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
