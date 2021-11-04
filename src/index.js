import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil"
import RecoilDemo from "./pages/Recoil"
import ContextDemo from "./pages/Context"


// context
ReactDOM.render(
  <ContextDemo />,
  document.getElementById('root2')
)


// recoil
ReactDOM.render(
  <RecoilRoot>
    <RecoilDemo />
  </RecoilRoot>,
  document.getElementById('root3')
)
