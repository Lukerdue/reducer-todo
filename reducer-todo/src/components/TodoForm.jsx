import React, { useState } from 'react';
import { addTodo } from '../actions'

function TodoForm(props){
    const { dispatch } = props
    const [form, setForm] = useState("")

    function handleChange(e){
        setForm(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo(form))
    }

    return(
        <div className="formWrapper">
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Learn About Reducers" onChange={handleChange} value={form}/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default TodoForm