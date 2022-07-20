import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import styles from './Todo.module.css';

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo({
      title: todo,
    }));

    document.getElementById("todo").value = "";
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} id="todo" type="text" onChange={({target}) => setTodo(target.value)} />
      <button className={styles.btn}><IoIosAddCircle /></button>
    </form>
  )
}

export default TodoList;