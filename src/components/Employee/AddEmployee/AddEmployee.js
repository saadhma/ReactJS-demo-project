import './AddEmployee.css';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/GlobalContext';
import { Button } from '../../Button';
import { Input } from '../../Input';

export const AddEmployee = () => {

  const navigate = useNavigate();

  const { addEmployee, employees } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  const onSubmit = (e) => {
      e.preventDefault();
      const newEmployee = {
        id: employees.length + 1,
        name,
        location,
        designation,
      };
      addEmployee(newEmployee);
      navigate(-1);
  };

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="formSection">
            <label className="labelText"> Name of employee </label>
            <Input type={"text"} placeholder={"Enter Name"} onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="formSection">
            <label className="labelText"> Location </label>
            <Input
              type={"text"}
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              width={"500px"}
            />
          </div>
          <div className="formSection">
            <label className="labelText"> Designation </label>
            <Input
              type={"text"}
              placeholder="Enter designation"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />
          </div>
          <div className="btnSection">
            <Button text={"Add Employee"} />
          </div>
          <div className="btnSection">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};