import { Component } from 'react';
import Todoitems from './Todoitems';
import  propTypes from 'prop-types';
class Todos extends Component {


  render() {

  return this.props.todos.map((todo) => (
    <Todoitems key={todo.id} todo={todo} markComplete=
    {this.props.markComplete} delTodo={this.props.delTodo} />
  ));
}
}

//proptypes

Todos.propTypes = {
todos: propTypes.array.isRequired
}
export default Todos;
