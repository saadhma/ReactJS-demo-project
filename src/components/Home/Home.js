import React from "react";
import { Heading } from "../Heading/Heading";
import { Table } from "../Table";
import './Home.css';

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Heading />
        <Table />
      </div>
    </React.Fragment>
  );
};