import axios from "axios";
import { FETCH_TODO, CREATE_NEW_TODO } from "./types";


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

export const handelEdit = () => {

};

export const handelCheck = () => {

};

export const handelDelete = () => {

};

