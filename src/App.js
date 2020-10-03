import React, { Component } from "react";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 2,
        title: "sleep",
      },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    // console.log(e);
  };
  handleSubmit = (e) => {
    // console.log(e);
  };
  clearList = () => {};
  handleDelete = (id) => {
    // console.log(`handle edit ${id}`);
  };
  handleEdit = (id) => {
    // console.log(`edit edit ${id}`);
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
