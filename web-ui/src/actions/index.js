export const FETCH_TODO_DATA_START   = 'FETCH_TODO_DATA_START';
export const FETCH_TODO_DATA_SUCCESS = 'FETCH_TODO_DATA_SUCCESS';
export const FETCH_TODO_DATA_FAILURE = 'FETCH_TODO_DATA_FAILURE';

export function loadTodoData(){
    return(dispatch) => {
        dispatch(fetchTodoDataStart());
        return fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(handleErrors)
                    .then(res => res.json)
                    .then(json => {
                        dispatch(fetchTodoDataSuccess(json.todos));
                        return json.todos;
                    })
                    .catch(error => dispatch(fetchTodoDataFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchTodoDataStart = () => ({
    type: FETCH_TODO_DATA_START
  });

  export const fetchTodoDataSuccess = todos => ({
    type: FETCH_TODO_DATA_SUCCESS,
    payload: { todos }
  });
  
  export const fetchTodoDataFailure = error => ({
    type: FETCH_TODO_DATA_FAILURE,
    payload: { error }
  });