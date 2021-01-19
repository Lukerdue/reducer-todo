import React from 'react';
import { toggleTodo } from '../actions'

function Todo(props){
    return(
    <div onClick={props.dispatch(toggleTodo)}>
        <p>{props.todo.item}</p>
    </div>
    )
}
export default Todo