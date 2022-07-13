import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handelDelete, passDataToEdit, handelCheck } from './../Redux/todoReducer/actions';

const Todo = ({ id, title, completed }) => {

  const { todoList } = useSelector(state => state.todoReducer);
  const [check, setCheck] = useState(completed);

  const dispatch = useDispatch();


  const deleteAction = (id) => {
    handelDelete(id, todoList, dispatch);
  };

  const getDataToEdit = (id) => {

    passDataToEdit(id, todoList, dispatch);
  };

  const checkAction = (id) => {
    setCheck(!completed);
    handelCheck(id, todoList, dispatch);
  };

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"
              checked={check}
              id="check"
              onChange={() => checkAction(id)}
            />
            <p>{title}</p>
          </div>
          <div className='todo-actions'>
            <FaEdit className='todo-edit' onClick={() => getDataToEdit(id)} />
            <FaTrashAlt className='todo-delete' onClick={() => deleteAction(id)} />
          </div>
        </li>

      </ul>
    </div >
  );
};

export default Todo;