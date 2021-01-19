import React from 'react';
import { toggleTodo } from '../actions'

function Todo(props){
    const {dispatch, todo} = props
    function handleToggle(){
        dispatch(toggleTodo(todo.id))
    }
    return(
    <div onClick={handleToggle} >
        <p className={todo.completed ? "completed" : ""}>{todo.item}</p>
    </div>
    )
}
export default Todo