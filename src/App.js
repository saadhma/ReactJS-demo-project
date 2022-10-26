import './App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, Table } from './components';
import { addItemToList, removeItemFromList, editItem } from "./store/Actions/tableActions";

export default function App() {

  const dispatch = useDispatch();

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
      dispatch(addItemToList(todoItem));
      clearInput();
    } else {
      alert("Please add Date and Description");
    }
  }

  function handleEditTodo(id, date, description) {
    if (date !== "" && description !== "") {
      let item = {
        id: id,
        date: date,
        description: description
      }
      dispatch(editItem(item));
      setEditing(false);
    } else {
      alert("Please add Date and Description");
    }
    clearInput();
  }

  const editTodoItem = (item) => {
    setEditing(true);
    setValueId(item.id);
    setValueDate(item.date);
    setValueDescription(item.description);
  }

  function handleDeleteButton(id) {
    dispatch(removeItemFromList(id));
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
            onClick={() => handleEditTodo(valueId, valueDate, valueDescription)}
            text="Edit ToDo"
            className={"btn-small"}
          />
        }
      </div>
      <Table editTodoItem={editTodoItem} deleteTodoItem={handleDeleteButton}/>
    </div>
  );
}