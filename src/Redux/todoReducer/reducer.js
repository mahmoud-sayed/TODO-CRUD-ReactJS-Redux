import { CHECK_CURRENT_TODO, DELETE_TODO, EDIT_TODO, CREATE_NEW_TODO, FETCH_TODO } from './types';

const todoReducer = (state = { todoList: null }, action) => {

  switch (action.type) {
    case FETCH_TODO:
      return { ...state, todoList: action.payload };
    case CREATE_NEW_TODO:
      return { ...state, todoList: action.payload };
    case EDIT_TODO:
      return state;
    case CHECK_CURRENT_TODO:
      return state;
    case DELETE_TODO:
      return state;

    default:
      return state;
  }

};

export default todoReducer;

