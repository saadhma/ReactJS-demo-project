import './Table.css';
import { Button } from '../../components';
import React, { useContext } from 'react';
import TableContext from '../../Contexts/TableContext';

export default function Table() {

    const { todos, handleDeleteTodo, handleEnableEditing } = useContext(TableContext);
    
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
                    {todos.map((todo, index) => {
                        return (
                            <tr key={todo.id}>
                                <td>{index + 1}</td>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                                <td>
                                    <div className="optionbtn">
                                        <Button className={"btn"} onClick={() => handleEnableEditing(todo)} text={"Edit"} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button className={"btn"} onClick={() => handleDeleteTodo(todo.id)} text={"Delete"} />
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