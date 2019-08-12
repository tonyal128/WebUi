import React from 'react';
import Todo from '../components/todo';

class todoContainter extends React.Component{
    render(){
        return(
            <Todo handleClick={this.props.loadTodoData}/>
        )
    }
}

export default todoContainter;