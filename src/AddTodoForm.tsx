import React, { useState, ChangeEvent, FormEvent } from "react";

export const AddTodoForm:React.FC=()=>{
    const [newTodo, setNewTodo]=useState<string>("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value);
    };

    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
    };

    return(
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    )
}