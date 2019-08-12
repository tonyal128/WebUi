import React from 'react';
import Todo from '../components/todo';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

class todoContainter extends React.Component{
    render(){
        return(
            <Todo handleClick={this.props.fetchTodoData}/>
        )
    }
}

const mapStateToProps=(state) => {
    return state;
}

export default connect(mapStateToProps,actionCreators)(todoContainter);