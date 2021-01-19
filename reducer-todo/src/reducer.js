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
            return(state);
        case("CLEAR_COMPLETED"):
            return(state);
        default: return(state);
    }
}