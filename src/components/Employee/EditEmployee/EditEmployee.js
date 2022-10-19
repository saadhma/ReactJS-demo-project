import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/GlobalContext';
import './EditEmployee.css';
import { Button } from '../../Button';
import { Input } from '../../Input';

export const EditEmployee = () => {

  const id = useParams();
  let navigate = useNavigate();

  const { employees, editEmployee } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });

  const currentUserId = id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId['*'])
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    navigate(-1);
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid Employee ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="formSection">
            <label className="labelText"> Name of employee </label>
            <Input type={"text"} placeholder={"Enter Name"}
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)} />
          </div>
          <div className="formSection">
            <label className="labelText"> Location </label>
            <Input
              type={"text"}
              placeholder="Enter location"
              value={selectedUser.location}
              onChange={(e) => handleOnChange("location", e.target.value)}
              width={"500px"}
            />
          </div>
          <div className="formSection">
            <label className="labelText"> Designation </label>
            <Input
              type={"text"}
              placeholder="Enter designation"
              value={selectedUser.designation}
              onChange={(e) => handleOnChange("designation", e.target.value)}
            />
          </div>
          <div className="btnSection">
            <Button text={"Edit Employee"} />
          </div>
          <div className="btnSection">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};