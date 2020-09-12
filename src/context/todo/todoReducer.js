import { ADD_TODO, DELETE_TODO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...state.todos, text: action.payload, isCompleted: false },
        ],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      const rest = newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};
