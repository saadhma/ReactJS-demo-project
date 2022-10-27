import './App.css';
import React from 'react';
import { Table } from './components';
import { useDispatch } from 'react-redux';
import { removeItemFromList } from "./store/Actions/tableActions";

export default function App() {

  const dispatch = useDispatch();

  function handleDeleteButton(id) {
    dispatch(removeItemFromList(id));
  };

  return (
    <div className="input-group">
      &nbsp;&nbsp;&nbsp;
      <Table deleteTodoItem={handleDeleteButton}/>
    </div>
  );
}