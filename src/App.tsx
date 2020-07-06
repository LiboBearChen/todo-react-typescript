import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';



const initialTodos: Array<Todo> = [
  { text: "dqwdwq", complete: false },
  { text: "efe", complete: true },
];

function App() {

  const [todos, setTodos]=useState(initialTodos);

  const toggleTodo:ToggleTodo= (selectedTodo) =>{
    const newTodos=todos.map(todo=>{
      if(todo===selectedTodo){
        return {
          ...todo,
          complete:!todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo=(newTodo:string)=>{
    setTodos([...todos, newTodo]);
  };

  return(
  <React.Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm />
  </React.Fragment>
  );

}

export default App;
