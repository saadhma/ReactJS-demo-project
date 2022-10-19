import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './Heading.css';

export const Heading = () => {
  return (
        <div className="heading">
          <h5>Employee Listing</h5>
          <Link to="/add">
          <Button className={"btn"} text={"Add Employee"} />
          </Link>
        </div>
  );
};