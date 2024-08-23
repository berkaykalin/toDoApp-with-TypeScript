import React, { useState } from 'react';
import "../App.css";

interface TodoCreateProps {
    onCreateTodo: (todo: { id: number, content: string }) => void;
}

const TodoCreate: React.FC<TodoCreateProps> = ({ onCreateTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    };

    const createTodo = () => {
        if (!newTodo) {
            return;
        }
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        };
        onCreateTodo(request);
        clearInput();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            createTodo();
        }
    };

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                className='todo-input'
                type="text"
                placeholder='Enter Todo'
            />
            <button onClick={createTodo} className='todo-button'>Create Todo</button>
        </div>
    );
};

export default TodoCreate;
