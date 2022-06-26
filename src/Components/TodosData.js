import React, { useEffect } from 'react';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handelFetch } from './../Redux/todoReducer/actions';

const TodosData = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    handelFetch(dispatch);
  }, []);
  const { todoList } = useSelector(state => state.todoReducer);


  return (
    <React.Fragment>
      {
        todoList?.length === 0 ? <h2 style={{ color: '#3A7BD5' }}>There is No todo </h2> :
          todoList?.map(todo =>

            <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />

          )
      }
    </React.Fragment >
  );
};

export default TodosData;