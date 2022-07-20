import React, { useEffect, useState } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import styles from './Todo.module.css';

const TodoUpdate = ({id, title, setUpdate}) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(title);
  }, [title]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateTodo({id: id, title: todo}));

    setUpdate(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.updateForm}>
      <input className={styles.updateInput} type="text" value={todo} onChange={({target}) => setTodo(target.value)} />
      <button className={styles.btn}><GrUpdate size={"1.3rem"} style={{cursor: 'pointer'}} /></button>
    </form>
  )
}

export default TodoUpdate;