import {
    FETCH_TODO_DATA_START,
    FETCH_TODO_DATA_SUCCESS,
    FETCH_TODO_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function todoReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_TODO_DATA_START:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_TODO_DATA_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.todos
        };
  
      case FETCH_TODO_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }