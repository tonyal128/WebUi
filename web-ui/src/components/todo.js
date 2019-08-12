import React from "react";
import { connect } from "react-redux";
import { loadTodoData } from "../actions/index";

class todo extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadTodoData());
  }

  render() {
    const { error, loading, todos } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {todos.map(todo =>
          <li key={todo.id}></li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.items,
  loading: state.todos.loading,
  error: state.todos.error
});

export default connect(mapStateToProps)(todo);