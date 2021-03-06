import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { handelCreate, handelEdit } from '../Redux/todoReducer/actions';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const [title, setTitle] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const dispatch = useDispatch();

  const { todoList } = useSelector(state => state.todoReducer);
  const data = useSelector(state => state.todoReducer.dataToEdit);
  const { itemToEdit, id } = data;

  useEffect(() => {
    if (itemToEdit) {
      setEditedTitle(itemToEdit[0].title);
    }
  }, [itemToEdit]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (todoList.length === 0) {
      const id = 1;
      handelCreate(id, title, dispatch);
      setTitle('');
    } else {
      const id = todoList[todoList.length - 1].id + 1;
      handelCreate(id, title, dispatch);
      setTitle('');
    }
  };

  const formEditSubmit = (e) => {

    handelEdit(id, editedTitle, data, dispatch);
    setEditedTitle('');
  };

  return (
    <form onSubmit={itemToEdit ? formEditSubmit : formSubmit}>
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={(e) => itemToEdit ? setEditedTitle(e.target.value) : setTitle(e.target.value)}
        value={itemToEdit ? editedTitle : title}
      />
      <button type='submit'> {itemToEdit ? <FaEdit /> : <FaPlus />}</button>
    </form >
  );
};

export default Form;