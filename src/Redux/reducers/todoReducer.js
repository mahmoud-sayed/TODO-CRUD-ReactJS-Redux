import { CHECK_CURRENT_TODO, DELETE_TODO, EDIT_TODO, CREATE_NEW_TODO } from '../types';

const todoReducer = (state = {}, action) => {

  switch (action.type) {
    case CREATE_NEW_TODO:
      return state;
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

