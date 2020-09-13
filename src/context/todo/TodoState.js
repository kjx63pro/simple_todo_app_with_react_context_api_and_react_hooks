import React, { useReducer } from 'react';
import TodoContext from './TodoContex';
import todoReducer from './todoReducer';

import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../types';

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        completeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
