export const Todos=[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]

export const reducer = (state, aciton)=>{
    switch(aciton.type){
        case("ADD_TODO"):
            return(state);
        case("TOGGLE_COMPLETED"):
            return(state);
        case("CLEAR_COMPLETED"):
            return(state);
        default: return(state);
    }
}