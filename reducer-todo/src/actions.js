export const addTodo=(data)=>{
    return {type: "ADD_TODO", payload: data}
}

export const toggleTodo=(data)=>{
    return {type: "TOGGLE_TODO", payload: data}
}

export const clearCompleted=()=>{
    return{type: "CLEAR_COMPLETED"}
}