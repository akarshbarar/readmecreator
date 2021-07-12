const selectedElementReducer=(state=[],action)=>{
    switch(action.type){
        case'ADD':
            return [...state,action.data];
        case 'REMOVE':
            console.log(state)
            return [...state];
        default:
            return state;
    }
}
export default selectedElementReducer;