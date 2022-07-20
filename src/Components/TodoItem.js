import React, { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { TiDelete } from 'react-icons/ti';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../redux/todoSlice';
import TodoUpdate from './TodoUpdate';
import styles from './Todo.module.css';

const TodoItem = ({id, title, completed}) => {

  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo({id, completed: !completed}));
  }

  const handleDelete = () => {
    dispatch(deleteTodo({id}));
  }

  return (
    <>
      {!update 
      ? (<div key={id} className={`${styles.itemList} ${completed && styles.completed}`}>
          {completed 
            ? (<ImCheckboxChecked onClick={handleComplete} />)
            : (<ImCheckboxUnchecked onClick={handleComplete} />)
          }
          <span id={id}>{title}</span>
          <HiPencil size={"1.7rem"} onClick={() => setUpdate(true)} />
          <TiDelete size={"1.7rem"} onClick={handleDelete} />
        </div>)
      : (<TodoUpdate id={id} title={title} setUpdate={setUpdate} />)}
    </>
  )
}

export default TodoItem;