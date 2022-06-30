import { CHECK_CURRENT_TODO, DELETE_TODO, EDIT_TODO, CREATE_NEW_TODO, FETCH_TODO, DATA_TO_EDIT } from './types';


const initialState = { todoList: [], dataToEdit: {} };

const todoReducer = (state = initialState, action) => {


  switch (action.type) {
    case FETCH_TODO:
      return {
        todoList: action.payload,
        dataToEdit: state.dataToEdit
      };

    case CREATE_NEW_TODO:
      return {
        todoList: [...state.todoList, action.payload],
        dataToEdit: state.dataToEdit
      };

    // case EDIT_TODO:
    //   return state;

    // case CHECK_CURRENT_TODO:
    //   return state;

    case DELETE_TODO:

      return {

        todoList: [...action.payload],
        dataToEdit: state.dataToEdit

      };

    case DATA_TO_EDIT:
      return {
        todoList: state.todoList,
        dataToEdit: { ...action.payload }
      };
    default:
      return state;
  };

};






export default todoReducer;

