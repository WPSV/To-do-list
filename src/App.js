import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="container">
      <p className="title">Todo List</p>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
