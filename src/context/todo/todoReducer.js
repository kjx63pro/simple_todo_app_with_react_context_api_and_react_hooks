import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload,
            isCompleted: false,
          },
        ],
      };

    case DELETE_TODO:
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodo,
      };

    case COMPLETE_TODO:
      const completeTodo = state.todos.find((t) => t.id === action.payload);

      completeTodo.isCompleted = !completeTodo.isCompleted;
      return {
        ...state,
        todos: [...state.todos],
      };

    default:
      return state;
  }
};
