import React, { Component } from "react";
// import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

export default class App extends Component {
  state = {
    item: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 2,
        title: "sleep",
      },
    ],
    // id:uuid()
    id: uuidv4()
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
