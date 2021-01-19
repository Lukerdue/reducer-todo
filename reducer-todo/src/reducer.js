export const initialState={Todos:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]}

export const reducer = (state, action)=>{
    switch(action.type){
        case("ADD_TODO"):
            return{...state, Todos: [...state.Todos, {
                item: action.payload,
                id: Date.now(),
                completed: false
            }]};
        case("TOGGLE_COMPLETED"):
            return{...state, Todos: state.Todos.map(todo=>{
                if(todo.id === action.payload){
                    return{...todo, completed: !todo.completed}
                }
                else{
                    return todo
                }
            })};
        case("CLEAR_COMPLETED"):
            return{...state, Todos: state.Todos.filter(todo=>{return todo.completed !== true})};
        default: return(state);
    }
}