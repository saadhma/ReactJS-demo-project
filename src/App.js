import './App.css';
import React, { useState } from 'react';

export default function App() {

  const todosData = [];

  const [todos, setTodosList] = useState(todosData);
  const [editing, setEditing] = useState(false);
  const [valueId, setValueId] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [valueDescription, setValueDescription] = useState("");

  const handleChangeDate = (event) => {
    const date = event.target.value;
    setValueDate(date);
  }

  const handleChangeDescription = (event) => {
    const description = event.target.value;
    setValueDescription(description);
  }

  const enableEditing = (todoItem) => {
    setEditing(true);
    setValueId(todoItem.id);
    setValueDate(todoItem.date);
    setValueDescription(todoItem.description);
  }

  function clearInput() {
    setValueDescription("");
    setValueDate("");
  }

  function addTodo(date, description) {
    if (date !== "" && description !== "") {
      let todoItem = {
        id: Math.random(),
        date: date,
        description: description
      }
        setTodosList((todosData) => [...todosData, todoItem]);
      clearInput();
    } else {
      alert("Please add Date and Description");
    }
  }

  function editTodo(id, date, description) {
    if (date !== "" && description !== "") {
      setTodosList(todos => todos.filter((item) => {
        if (item.id === id) {
          return (
            item.date = date,
            item.description = description
          );
        }
        return todos;
      }));
      setEditing(false);
    } else {
      alert("Please add Date and Description");
    }
    clearInput();
  }

  const deleteTodo = (id) => {
    setTodosList(todos => todos.filter((item) => item.id !== id));
  };

  return (
    <div className="input-group">
      <div className="container">
        <input type="text" id="todoValueDescription" placeholder="Add Description" onChange={handleChangeDescription} value={valueDescription} />
      </div>
      <div className="container">
        <input type="date" id="todoValueDate" placeholder="Add Date" onChange={handleChangeDate} value={valueDate} />
        &nbsp;&nbsp;&nbsp;
        {!editing ?
          <button onClick={() => addTodo(valueDate, valueDescription)} type="button">Add New ToDo</button> :
          <button onClick={() => editTodo(valueId, valueDate, valueDescription)} type="button">Edit ToDo</button>
        }
      </div>
      <div className="table-outline">
        <table className="table">
          <thead>
            <tr>
              <td>No.</td>
              <td>Description</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
          {todos.map((todo, index) => {
            return (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.description}</td>
                  <td>{todo.date}</td>
                  <td className="btn-outline">
                  <div className="optionbtn">
                      <button onClick={() => enableEditing(todo)} >Edit</button>
                      <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                      </div>
                  </td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}