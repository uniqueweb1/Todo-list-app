import { Component } from 'react';
import  propTypes from 'prop-types';

export class Todoitems extends Component {
  getStyle = () => {
  return{
    background: 'rgb(110, 216, 163)',
    color: '#fff',
    padding: '17px',
    borderBottom: '3px #000 dotted',
    textDecoration: this.props.todo.completed ?
    'line-through' : 'none'
  }
    }
  
    
  render() {
const{ id, title } = this.props.todo;

  return (
      <div style={this.getStyle()}>
<p>
 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{''} 
  { title }
  <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
  </p>
      </div>
  )
}
}

//proptypes

Todoitems.propTypes = {
    todo: propTypes.object.isRequired
    }

    const btnStyle = {
      background: 'red',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
    }
export default Todoitems;