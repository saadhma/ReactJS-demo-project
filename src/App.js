import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import React from 'react';
import { GlobalProvider } from './Contexts/GlobalContext';
import { Home } from './components/Home/Home';
import { AddEmployee } from './components/Employee/AddEmployee/AddEmployee';
import { EditEmployee } from './components/Employee/EditEmployee/EditEmployee';


export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Screens />
        </Router>
      </div>
    </GlobalProvider>
  );
}

const Screens = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add", element: <AddEmployee /> },
    { path: "*", element: <EditEmployee /> },
  ]);
  return routes;
};