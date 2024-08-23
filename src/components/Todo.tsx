import React, { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import "../App.css";

interface TodoType {
    id: number;
    content: string;
}

interface TodoProps {
    todo: TodoType;
    onRemoveTodo: (id: number) => void;
    onUpdateToDo:(todo:TodoType)=>void
}

const Todo: React.FC<TodoProps> = ({ todo, onRemoveTodo,onUpdateToDo }) => {
    const [editable,setEditable]=useState(false)
    const [newTodo,setNewTodo]=useState(todo.content)

    const removeTodo = () => {
        onRemoveTodo(todo.id);
    }

    const updateToDo = ()=>{
        const request={
            id:todo.id,
            content:newTodo
        }
        onUpdateToDo(request);
        setEditable(false);
    }

    return (
    <div style={{ fontSize:"20px",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", border: "1px solid lightgray", padding: "10px", marginTop: "10px" }}>
      <div>
        {
            editable ? <input style={{width:"380px"}} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='todo-input' type="text"/> : todo.content
        }
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {
            editable ? <FaCheck className='todo-icons' onClick={updateToDo} /> : <AiFillEdit className='todo-icons' onClick={()=>setEditable(true)} />
        }
        
      </div>
    </div>
  );
}

export default Todo;
