import React, { useState } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { handelCreate } from '../Redux/todoReducer/actions';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const { todoList } = useSelector(state => state.todoReducer);
  const data = useSelector(state => state.todoReducer.dataToEdit);

  console.log(data);

  const formSubmit = (e) => {
    e.preventDefault();
    const id = todoList[todoList.length - 1].id + 1;
    handelCreate(id, title, dispatch);
    setTitle('');
  };




  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button type='submit'> <FaPlus /></button>
    </form>
  );
};

export default Form;