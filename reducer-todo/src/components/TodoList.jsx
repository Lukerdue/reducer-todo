
import React, {useReducer} from 'react';
import Todo from './Todo'
import { clearCompleted } from '../actions'

function TodoList(props){
    const { state, dispatch} = props
    console.log(state)
    function handleClick(e){
        e.preventDefault();
        dispatch(clearCompleted())
    }
    return(
        <div>
            {state.Todos.map(todo=>{return <Todo todo={todo} dispatch={dispatch}/>})}
            <button onClick={handleClick}>Clear Completed!</button>
        </div>
    )
}
export default TodoList