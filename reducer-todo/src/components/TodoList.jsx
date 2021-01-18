import {reducer, initialState} from '../reducer';
import React, {useReducer} from 'react';
import Todo from './Todo'
function TodoList(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            {state.map(todo=>{return <Todo todo={todo} dispatch={dispatch}/>})}
        </div>
    )
}
export default TodoList