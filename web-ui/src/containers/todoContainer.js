import React from 'react';
import Todo from '../components/todo';

export default class todoContainter extends React.Component{

    render(){
        return(
            <Todo handleClick={this.props.loadTodoData}/>
        )
    }
}