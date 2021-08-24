import React from 'react';
import ReactDOM from 'react-dom';
import ContextDemo from "./pages/ContextDemo"
import RecoilDemo from "./pages/RecoilDemo"
import { RecoilRoot } from "recoil"

// recoil 
ReactDOM.render(
  <RecoilRoot>
    <RecoilDemo />
  </RecoilRoot>,
  document.getElementById('root')
);

// context 
ReactDOM.render(<ContextDemo />,document.getElementById('root2'));
