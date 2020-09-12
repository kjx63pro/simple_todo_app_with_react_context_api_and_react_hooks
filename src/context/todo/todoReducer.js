import { ADD_TODO } from '../types';

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

    default:
      return state;
  }
};
