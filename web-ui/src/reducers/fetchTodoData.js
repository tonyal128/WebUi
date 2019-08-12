const populateTodoData = (state = {}, action) => {
    switch(action.type){
        case "FETCH_TODO_DATA":
            return {
            ...state,
            userId: action.userId,
            id: action.id,
            title: action.title,
            completed: action.completed
            }
        default:
            return state;
    }
}

export default populateTodoData;