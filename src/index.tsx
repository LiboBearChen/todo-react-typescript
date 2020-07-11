import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { TodoList } from './TodoList';

let c1 = (
  <div className="center">
    <App />
    <div >yysfss</div>
  </div>
);

let c2 = React.createElement('div', null, '!!!!', 'fwwefewfwfewfewfw');

let c3 = React.createElement('div', { className: 'center' }, React.createElement('h1', null, 'fewfewfe'));

ReactDOM.render(
  c1,
  document.getElementById('root')
);
/* ReactDOM.render(
  <div>dvfsefesfsefes</div>,
  document.getElementById('a')
);
 */



