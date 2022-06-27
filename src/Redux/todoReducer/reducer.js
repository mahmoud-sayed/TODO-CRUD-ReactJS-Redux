import { CHECK_CURRENT_TODO, DELETE_TODO, EDIT_TODO, CREATE_NEW_TODO, FETCH_TODO, DATA_TO_EDIT } from './types';

const todoReducer = (state = { todoList: null, dataToEdit: null }, action) => {

  switch (action.type) {
    case FETCH_TODO:
      return { ...state, todoList: action.payload };

    case CREATE_NEW_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case EDIT_TODO:
      return {};
    case CHECK_CURRENT_TODO:
      return state;
    case DELETE_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case DATA_TO_EDIT:
      return { ...state.dataToEdit };
    default:
      return state;
  }


};

export default todoReducer;

