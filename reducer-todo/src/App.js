import './App.css';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import { useReducer } from 'react';
import {reducer, initialState} from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
