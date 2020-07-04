import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';



const initialTodos: Array<Todo> = [
  { text: "dqwdwq", complete: false },
  { text: "efe", complete: true },
];

function App() {

  const [todos, setTodos]=useState(initialTodos);

  const toggleTodo= (selectedTodo: Todo) =>{
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

  return(
  <React.Fragment>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
  </React.Fragment>
  );

}

export default App;
