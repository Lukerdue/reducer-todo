
import React, {useReducer} from 'react';
import Todo from './Todo'
import { clearCompleted } from '../actions'

function TodoList(props){
    const { state, dispatch} = props
    console.log(state)
    return(
        <div>
            {state.Todos.map(todo=>{return <Todo todo={todo} dispatch={dispatch}/>})}
            <button onClick={dispatch(clearCompleted)}>Clear Completed!</button>
        </div>
    )
}
export default TodoList