import React, { useState, createContext } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [employees, setEmployeesList] = useState([]);

  function addEmployee(employee) {
      if (employee.name !== "" && employee.designation !== "" && employee.location !== "") {
        let item = {
          id: employees.length + 1,
          name: employee.name,
          designation: employee.designation,
          location: employee.location,
        }
        setEmployeesList((listData) => [...listData, item]);
      } else {
        alert("Please add Name, Location and Designation");
      }
  }

  function editEmployee(employee) {
    if (employee.name !== "" && employee.designation !== "" && employee.location !== "") {
      setEmployeesList(listData => listData.filter((item) => {
        if (item.id === employee.id) {
          return (
            item.name = employee.name,
            item.designation = employee.designation,
            item.location = employee.location
          );
        }
        return listData;
      }));
    }
    else {
      alert("Please add Name, Location and Designation");
    }
  }

  function removeEmployee(id) {
    setEmployeesList(listData => listData.filter((item) => item.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: employees,
        addEmployee,
        editEmployee,
        removeEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};