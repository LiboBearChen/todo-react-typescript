import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  text: string;
  complete: boolean;
};

const todos: Array<Todo> = [
  { text: "dqwdwq", complete: false },
  { text: "efe", complete: true },
];

function App() {
  return <TodoListItem/>;
}

export default App;
