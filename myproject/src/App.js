import { Component } from 'react';
import Header from './component/layout/Header';
import './App.css';
import './component/Todos';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
class App extends Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Take it out',
        completed: false
      },
      {
        id: 2,
        title: 'Go out today',
        completed: false
      },
      {
        id: 3,
        title: 'Read my book',
        completed: false
      }
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      
      }
      return todo;
    })});
  }
  // delete todo
  delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo ={
      id: 4,
      title,
     completed: false
    }
    this.setState({ todos: [...this.state.todos,newTodo] })
  }
render() {
  return (
    <div className="App">
       <div className="App">
       <Header />
      <AddTodo  addTodo={this.addTodo} />
       <Todos todos={this.state.todos} markComplete={this.markComplete}
       delTodo={this.delTodo} />
       </div>
    </div>
  );
}
}

export default App;
