import './App.css';
import React, { useState } from 'react';
import { Button, Input, Table } from './components';
import TableContext from './Contexts/TableContext';

export default function App() {

  const [todos, setTodosList] = useState([]);
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

  const handleEnableEditing = (todoItem) => {
    setEditing(true);
    setValueId(todoItem.id);
    setValueDate(todoItem.date);
    setValueDescription(todoItem.description);
  }

  function clearInput() {
    setValueDescription("");
    setValueDate("");
  }

  const handleDeleteTodo = (id) => {
    setTodosList(todoList => todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="input-group">
        <div className="container">
          <Input type={"text"} placeholder={"Add Description"} onChange={handleChangeDescription} value={valueDescription} />
        </div>
        <div className="container">
          <Input type={"date"} placeholder={"Add Date"} onChange={handleChangeDate} value={valueDate} />
          &nbsp;&nbsp;&nbsp;
          {!editing ?
            <Button
              onClick={() => addTodo(valueDate, valueDescription)}
              text="Add New ToDo"
              className={"btn-small"}
            /> :
            <Button
              onClick={() => editTodo(valueId, valueDate, valueDescription)}
              text="Edit ToDo"
              className={"btn-small"}
            />
          }
        </div>
        <TableContext.Provider value={{ todos, handleDeleteTodo, handleEnableEditing}}>
          <Table/>
      </TableContext.Provider>
    </div>
  );
}