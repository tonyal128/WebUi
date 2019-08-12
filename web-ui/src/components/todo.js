import React from 'react';

class todo extends React.Component{
    /*constructor(props){
        super(props);
        this.state = {
            todos: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json()
        .then(json => {
            this.setState({
                isLoaded: true,
                todos: json
            })
        }))
        
    }*/
    render(){
      //  let { todos} = this.state;
        return(
            <div className="wrapper">                
                <button onClick={() => {this.props.handleClick()}}>Fetch Data</button>
                <p>{this.props.userId}</p>
            </div>
        )
    }
}

export default todo;