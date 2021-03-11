import './App.css';
import React from 'react';
import AddForm from './AddForm.js';
import TodoList from './TodoList.js';
import Header from './Header.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      todos: localStorage.todos !== undefined ? JSON.parse(localStorage.getItem("todos")) : [],
    }
    this.setTodos = this.setTodos.bind(this)
    this.modifyTodo = this.modifyTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  componentDidUpdate(prevState){
    if(this.state.todos !== prevState.todos){
      localStorage.setItem('todos', JSON.stringify(this.state.todos)) // save in localStorage, whenever modifications take place in state.todos
    }
  }

  setTodos(todo){
    if(todo.length === 0)
      this.setState({todos:[]})
    else{
      this.setState({todos: [...this.state.todos, todo]})
    }
  }
  modifyTodo(todo){
    let oldTodos = [...this.state.todos] // shallow copy of current todos
    let cTodo;
    for(let i = 0; i < this.state.todos.length; i++){
      if(this.state.todos[i].id === todo.id){
        cTodo = {...this.state.todos[i]} // shallow copy of the todo to be modified
        if(cTodo.status === 'noncompleted')
          cTodo.status = 'completed'
        else  
          cTodo.status = 'noncompleted'

        oldTodos[i] = cTodo // modify the current todos list shallow copy
        this.setState({todos: oldTodos}) // set the modified todos into state
        break;
      }
    }
  }

  deleteTodo(todo){
    console.log(todo.id)
    this.setState({
      todos: 
        this.state.todos.filter(
          i => i.id !== todo.id // return true for all todos, except for the passed todo
        )
    })
  }

  render(){
    return (
      <div>
        <Header />
        <AddForm setTodos={this.setTodos} />
        <TodoList setTodos={this.setTodos} todos={this.state.todos} modifyTodo={this.modifyTodo} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
