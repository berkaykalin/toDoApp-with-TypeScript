import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './App.css';

interface TodoType {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  
  const createTodo = (newTodo: TodoType) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  const updateToDo=(newTodo:TodoType)=>{
    const updatedTodos=todos.map((todo)=>{
      if (todo.id!==newTodo.id) {
        return todo;
      }
      return newTodo
    })
    setTodos([...updatedTodos])
  }

  console.log(todos);
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateToDo={updateToDo} />
      </div>
    </div>
  );
}

export default App;
