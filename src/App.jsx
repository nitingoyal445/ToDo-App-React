import React, { Component } from 'react';
import InputBox from './Components/inputBox';
import TodoList from './Components/TodoList';


class App extends Component {
  
  state = {
    todos : [{id:1, todo:"Learn JSX"},{id:2, todo:"Learn React"},{id:3, todo:"Learn JS"},{id:4, todo:"Learn CSS"}]
  }

  deleteTodo = (id) =>{
    let filteredTodos = this.state.todos.filter(todoObject =>{
      return todoObject.id != id;
    });

    this.setState({
      todos: filteredTodos
    })
  }

  addTodo = (todo)=>{
    this.setState({
      todos: [ ...this.state.todos , {id: this.state.todos.length + 1 , todo: todo}]
    })
  }

  render() { 
    return ( <div className="container">
      <InputBox handleAdd = {this.addTodo}/>
      <TodoList todosList = {this.state.todos} handleDelete = {this.deleteTodo}/>
      </div>
     );
  }
}
 
export default App;























//sfc=> stateless functional component
// function App() {
//   return (<h1> Hello from App</h1>);
// }

// export default App;


//nodejs
//require("react";
//module.exports = function;

//language => javascript
//require => import 
//module.exports => exports default App;

