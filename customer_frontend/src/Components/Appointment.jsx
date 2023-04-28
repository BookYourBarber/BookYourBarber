import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/userinformation"><Dropdown.Item href="#/action-1">Barber 1</Dropdown.Item></Link>
        <Link to="/userinformation"><Dropdown.Item href="#/action-2">Barber 2</Dropdown.Item></Link>
        <Link to="/userinformation"><Dropdown.Item href="#/action-3">Barber 3</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;