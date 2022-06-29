import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todoInput = document.getElementById("todo");
    todoInput.value = "";
    todoInput.focus();
  }, [todoList]);

  function handleSubmit(event) {
    event.preventDefault();

    if (todo !== "") setTodoList((todoList) => [...todoList, todo]);
    setTodo('');
  }

  function handleDelete(deleteTodo) {
    setTodoList(todoList.filter((todo) => {
      return todo !== deleteTodo;
    }));
  }

  function handleCheck(indexTodo){
    const checkTodo = document.getElementById(indexTodo);
    if (checkTodo.style.textDecoration === "line-through") {
      checkTodo.style.textDecoration = "none";
    } else { 
      checkTodo.style.textDecoration = "line-through";
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="todo" type="text" onChange={({target}) => setTodo(target.value)} /><br/>
        <button>Salvar</button>
      </form>
      <div>
        {todoList?.map((todo, index) => (
          <div key={index}>
            <span id={index} style={{marginRight: "10px"}}>{todo}</span>
            <FontAwesomeIcon icon={faSquareCheck} onClick={() => handleCheck(index)} />
            <FontAwesomeIcon icon={faXmark} onClick={() => handleDelete(todo)} /><br/>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList;