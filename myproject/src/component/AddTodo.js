import { Component } from 'react';

export class AddTodo extends Component {
      state = {
          title: ''
      }

      onSubmit = (e) => {
          e.preventDefault();
          this.props.addTodo(this.state.title);
          this.setState({ title: ''})
      }
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form> 
            <input type="text" 
            name="title"
            style={{flex: '10', padding: '5px', height: 'auto', alignItems: 'center'}} 
            placeholder="Add Todo ...."
            value={this.state.title}
            onChange = {this.onChange}
            />
            <input type="submit"
            value="submit"
            className="btn"
            style={{flex: '1', float: 'right'}}
            />
            </form>
        )
    }
}

export default AddTodo