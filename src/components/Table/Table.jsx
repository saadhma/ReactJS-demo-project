import './Table.css';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../Contexts/GlobalContext';
import { Button } from '../Button';

export default function Table() {

    let navigate = useNavigate();

    const { employees, removeEmployee } = useContext(GlobalContext);
    
    const editEmployee = (id) => {
        navigate(`${id}`);
    }

    return (
                <div className="table-outline">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Name</td>
                                <td>Designation</td>
                                <td>Location</td>
                            </tr>
                        </thead>
                        <tbody> 
                            {employees.map((employee, index) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{index + 1}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.designation}</td>
                                        <td>{employee.location}</td>
                                        <td>
                                            <div className="optionbtn">
                                                <Button className={"btn"} onClick={() => editEmployee(employee.id)} text={"Edit"} />
                                                &nbsp;&nbsp;&nbsp;
                                                <Button className={"btn"} onClick={() => removeEmployee(employee.id)} text={"Remove"} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
}