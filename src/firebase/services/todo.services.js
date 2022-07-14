import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore/lite';



const bookCollectionRef = collection(db, 'todos');


export const getAllTodo = () => {
  return getDocs(bookCollectionRef);
};

export const addTodo = (newTodo) => {
  return addDoc(bookCollectionRef, newTodo);
};

export const updateTodo = (id, updatedTodo) => {
  const todoDoc = doc(db, 'todos', id);
  return updateDoc(todoDoc, updatedTodo);
};

export const deleteTodo = (id) => {
  const todoDoc = doc(db, 'todos', id);
  return deleteDoc(todoDoc);
};



export const gitSingleTodo = (id) => {
  const todoDoc = doc(db, 'todos', id);
  return getDoc(todoDoc);
};
