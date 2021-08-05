import './App.css';
import { RecoilRoot } from "recoil"
import Counter from "./pages/Add"
import TodoList from './pages/TodoList';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
