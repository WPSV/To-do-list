import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from './Todo.module.css';

const TodoList = () => {

  const todos = useSelector((state) => state.todos);

  return (
    <div className={todos.length !== 0 ? styles.list : ""}>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} /> 
      ))}
    </div>
  )
}

export default TodoList;