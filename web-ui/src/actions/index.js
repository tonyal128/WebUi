import axios from 'axios';

export function loadTodoUserId(){
    return(dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/todos".then((response) => {
            dispatch(fetchTodoData(response.data))
        })
        );
    }
}

const fetchTodoData = (data) => {
    return {
        type: 'FETCH_TODO_DATA',
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed
    }
}