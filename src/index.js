import React from 'react';
import ReactDOM from 'react-dom';
import ContextDemo from "./pages/ContextDemo"
import RecoilDemo from "./pages/RecoilDemo"
import { RecoilRoot } from "recoil"
import TodoListDemo from "./pages/TodoListDemo"

// recoil 
// ReactDOM.render(
//   <RecoilRoot>
//     <RecoilDemo />
//   </RecoilRoot>,
//   document.getElementById('root')
// );

// // context 
// ReactDOM.render(<ContextDemo />,document.getElementById('root2'));


// todolist
ReactDOM.render(
  <RecoilRoot>
    <TodoListDemo />
  </RecoilRoot>,
  document.getElementById('root3')
)