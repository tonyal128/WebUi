const populateTodoData = (state = {}, action) => {
    switch(action.type){
        case "FETCH_TODO_DATA":
            return state;
        default:
            return state;
    }
}

export default populateTodoData;