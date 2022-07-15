import axios from "axios";
import { addTodo, getAllTodo, deleteTodo, updateTodo } from "../../firebase/services/todo.services";
import { FETCH_TODO, CREATE_NEW_TODO, DELETE_TODO, EDIT_TODO, DATA_TO_EDIT, CHECK_CURRENT_TODO } from "./types";



const DATA_URL = 'http://localhost:100/data';
export const handelFetch = async (dispatch) => {

  try {
    //const response = await axios.get(DATA_URL);
    const response = await getAllTodo();
    const data = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return dispatch({
      type: FETCH_TODO,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }

};

export const handelCreate = async (id, title, dispatch) => {

  if (title.length < 2) {
    window.alert('please add value more than 2 characters');
  } else {

    const data = { id, title, completed: false };
    await addTodo(data);
    //await axios.post(DATA_URL, data);
    return dispatch({
      type: CREATE_NEW_TODO,
      payload: data
    });
  }

};

export const passDataToEdit = (id, todoList, dispatch) => {

  const itemToEdit = todoList.filter(todo => todo.id === id);
  const items = { itemToEdit, id };
  return dispatch({
    type: DATA_TO_EDIT,
    payload: items
  });

};

export const handelEdit = async (id, editedTitle, data, dispatch) => {
  console.log(data);
  const title = { ...data, title: editedTitle };
  //await axios.patch(`${DATA_URL}/${id}`, title);
  updateTodo(id, title);
  return dispatch({
    type: EDIT_TODO,
    payload: title
  });

};

export const handelCheck = async (id, FilteredItemToCheck, dispatch) => {

  const itemAfterCheck = { completed: !FilteredItemToCheck[0].completed };
  await axios.patch(`${DATA_URL}/${id}`, { completed: !FilteredItemToCheck[0].completed });
  return dispatch({
    type: CHECK_CURRENT_TODO,
    payload: itemAfterCheck
  });
};

export const handelDelete = async (id, todoList, dispatch) => {

  const filteredItems = todoList.filter(todo => todo.id !== id);
  //await axios.delete(`${DATA_URL}/${id}`, filteredItems); // delete operation for axios
  deleteTodo(id);
  return dispatch({
    type: DELETE_TODO,
    payload: filteredItems
  });

};

