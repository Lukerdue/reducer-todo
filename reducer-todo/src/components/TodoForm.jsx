import React from 'react';

function TodoForm(){
    return(
        <div className="formWrapper">
            <form>
                <input name="name" type="text" placeholder="Learn About Reducers"/>
                <submit>Add</submit>
            </form>
        </div>
    )
}
export default TodoForm