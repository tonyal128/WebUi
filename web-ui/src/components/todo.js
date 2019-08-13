import React from "react";
import {Button,Card,ListGroup} from "react-bootstrap";

const API = 'https://jsonplaceholder.typicode.com/todos';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        props: [],
    }
  }
  componentDidMount() {
    fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ props: data }));
  }

  render() {
    const { props } = this.state;
    return (
        <Card>
            <Card.Header>To Do</Card.Header>
            <div>
            {props.map(prop =>
                <ListGroup variant="flush">
                    <ListGroup.Item>User ID: {prop.userId}</ListGroup.Item>
                    <ListGroup.Item>ID: {prop.id}</ListGroup.Item>
                    <ListGroup.Item>Title: {prop.title}</ListGroup.Item>
                    <ListGroup.Item>Completed: {prop.completed.toString()}</ListGroup.Item>                
                </ListGroup>
                
            )}
            <Button>Fetch Data</Button>
            </div>
        </Card>
      );
  }
}
export default (Todo);