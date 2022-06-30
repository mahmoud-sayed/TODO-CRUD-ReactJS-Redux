import axios from "axios";
import { FETCH_TODO, CREATE_NEW_TODO, DELETE_TODO, EDIT_TODO, DATA_TO_EDIT } from "./types";


const DATA_URL = 'http://localhost:100/data';
export const handelFetch = async (dispatch) => {




  try {
    const response = await axios.get(DATA_URL);
    const data = response.data;
    return dispatch({
      type: FETCH_TODO,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }

};

export const handelCreate = async (id, title, dispatch) => {

  const data = { id, title, completed: false };
  await axios.post(DATA_URL, data);
  return dispatch({
    type: CREATE_NEW_TODO,
    payload: data
  });

};

export const passDataToEdit = (id, todoList, editSign, setEditSign, dispatch) => {
  const itemToEdit = todoList.filter(todo => todo.id === id);

  const items = { itemToEdit, id, editSign, setEditSign };
  return dispatch({
    type: DATA_TO_EDIT,
    payload: items
  });



};

export const handelEdit = () => {

};

export const handelCheck = () => {

};

export const handelDelete = async (id, todoList, dispatch) => {

  const filteredItems = todoList.filter(todo => todo.id !== id);
  await axios.delete(`${DATA_URL}/${id}`, filteredItems);
  return dispatch({
    type: DELETE_TODO,
    payload: filteredItems
  });

};

