import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  state = {
    editing: false,
    id: "",
    valueDate: "",
    valueDescription: "",
    todos: []
  
}

  getTime() {
    const d = new Date();
    const n = d.getTime();
    return n;
  }

  handleDelete(itemId) {
    const updatedTodoList = this.state.todos.filter((t) => {
      return t.id !== itemId
    });
    this.setState({ todos: updatedTodoList });
  }

  addNewTodo = (valueDate, valueDescription) => {
    if (valueDate && valueDescription) {
      const temp = [...this.state.todos]
      temp.push(
        {
          id: this.getTime(),
          valueDate: valueDate,
          valueDescription: valueDescription,
        }
      );
      this.setState({todos:temp})
      this.setState({ valueDate: valueDate, valueDescription: valueDescription })
    } else {
      alert("Please Add Description & Date");
    }
  }

  editItem(todo) {
    this.setState({
      id: todo.id,
      valueDate: todo.valueDate,
      valueDescription: todo.valueDescription,
      editing: true
    });
  }

  editTodo = (valueDate, valueDescription) => {
    this.state.todos.map((item) => {
      if (item.id === this.state.id) {
        return (
          item.valueDate = valueDate,
          item.valueDescription = valueDescription
        );
      }
      return this.state.todos
    });
    this.setState({ valueDate: valueDate, valueDescription: valueDescription, id: "", editing: false })
  }

  render() {
    return (
      <div className="table-outline">
        {this.state.editing ?
          <EditTodo editTodoItem={this.editTodo} valueDate={this.state.valueDate} valueDescription={this.state.valueDescription} /> :
          <AddTodo addTodoItem={this.addNewTodo} />}
        <table className="table">
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Date</td>
            </tr>
          </thead>
          {this.state.todos.map((todo, index) => {
            return (
              <tbody key={todo.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{todo.valueDescription}</td>
                  <td>{todo.valueDate}</td>
                  <td style={{ width: 100 }} className="text-center">
                    <div className="optionbtn">
                      <button disabled={this.state.editing} onClick={this.editItem.bind(this, todo)}>Edit</button>
                      <button onClick={this.handleDelete.bind(this, todo.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    );
  }
}

export default App;

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDate: "",
      addDescription: "",
    }
  }
  

  handleChangeDate = (e) => {
    this.setState({
      addDate: e.target.value
    });
  }

  handleChangeDescription = (e) => {
    this.setState({
      addDescription: e.target.value
    });
  }

  clearInput = () => {
    document.getElementById("todoValueDate").value = "";
    document.getElementById("todoValueDescription").value = "";
    this.setState({ addDate: "", addDescription: "" });
  }

  addTodo = () => {
    this.props.addTodoItem(this.state.addDate, this.state.addDescription);
    this.clearInput();
  }

  render() {
    return (
      <div className="input-group">
        <div className="container">
          <input type="text" id="todoValueDescription" placeholder="Add Description" onChange={this.handleChangeDescription} />
        </div>
        <div className="container">
          <input type="date" id="todoValueDate" placeholder="Add Date" onChange={this.handleChangeDate} />
          &nbsp;&nbsp;&nbsp;
          <button onClick={this.addTodo} type="button">Add New ToDo</button>
        </div>
      </div>
    );
  }
}

class EditTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editDate: this.props.valueDate,
      editDescription: this.props.valueDescription,
    }
  }

  handleChangeDate = (e) => {
    this.setState({
      editDate: e.target.value
    });
  }

  handleChangeDescription = (e) => {
    this.setState({
      editDescription: e.target.value
    });
  }

  clearInput = () => {
    document.getElementById("todoValueDate").value = "";
    document.getElementById("todoValueDescription").value = "";
    this.setState({ editDate: "", editDescription: "" });
  }

  editTodo = () => {
    this.props.editTodoItem(this.state.editDate, this.state.editDescription);
    this.clearInput();
  }

  render() {
    return (
      <div className="input-group">
        <div className="container">
          <input type="text" id="todoValueDescription" name='description' placeholder="Add Description" onChange={this.handleChangeDescription} value={this.state.editDescription} />
        </div>
        <div className="container">
          <input type="date" id="todoValueDate" name='date' placeholder="Add Date" onChange={this.handleChangeDate} value={this.state.editDate} />
          &nbsp;&nbsp;&nbsp;
          <button onClick={this.editTodo} type="button">Edit ToDo</button>
        </div>
      </div>
    );
  }
}