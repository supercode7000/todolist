import React, { Component } from 'react';
import todoData from './todoData'
import './App.css';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: todoData,
      newTodo: '',
      isCompleteNewTodo: false
    }
  }
  handleCheckBox = (id) => {
    console.log(id)
    this.setState(prevState => {
      const updatedTodo = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      return { todoData: updatedTodo }
    })
  }
  handleNewTodo = (e) => {
    this.setState({ newTodo: e.target.value });
  }
  handleNewTodoCheckBox = () => {
    this.setState({ isCompleteNewTodo: !this.state.isCompleteNewTodo });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      todo: this.state.newTodo,
      isComplete: this.state.isCompleteNewTodo
    }
    this.state.todoData.push(newTodoItem)
    this.setState({ todoData: todoData })

  }
  deleteItem = (id) => {
    console.log(id)
    const filtredTodo = this.state.todoData.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todoData: filtredTodo })
  }
  render() {
    const todo = this.state.todoData.map(todo => <TodoItem
      key={todo.id}
      todo={todo}
      handleCheckBox={this.handleCheckBox}
      deleteItem={this.deleteItem}
    />)
    return (
      <div className="App">
        <AddTodo
          isCompleteNewTodo={this.state.isCompleteNewTodo}
          handleNewTodo={this.handleNewTodo}
          handleNewTodoCheckBox={this.handleNewTodoCheckBox}
          handleSubmit={this.handleSubmit}
        />
        {todo}
      </div>
    );
  }
}


export default App;
