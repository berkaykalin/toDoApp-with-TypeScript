import React from 'react';
import Todo from './Todo';

interface TodoType {
    id: number;
    content: string;
}

interface TodoListProps {
    todos: Array<TodoType>;
    onRemoveTodo: (id: number) => void;
    onUpdateToDo: (todo:TodoType) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo,onUpdateToDo }) => {
  return (
    <div style={{ width: "100%", marginTop: "50px"}}>
        {todos && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateToDo={onUpdateToDo} />
        ))}
    </div>
  );
}

export default TodoList;
