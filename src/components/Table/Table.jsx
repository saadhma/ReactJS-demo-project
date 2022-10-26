import './Table.css';
import { Button } from '../../components';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Table({ editTodoItem, deleteTodoItem }) { 

    const todoList = useSelector((state) => state.Table.todoList);

    return (
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
                    {todoList.map((todo, index) => {
                        return (
                            <tr key={todo.id}>
                                <td>{index + 1}</td>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                                <td>
                                    <div className="optionbtn">
                                        <Button className={"btn"} onClick={() => {editTodoItem(todo)}} text={"Edit"} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button className={"btn"} onClick={() => {deleteTodoItem(todo.id)}} text={"Delete"} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}