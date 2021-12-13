import React, { Component } from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListTodo extends Component {
  state = {
    ListTodos: [
      { id: "1", title: "doing homework" },
      { id: "2", title: "doing video" },
      { id: "3", title: "doing bugging" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("success!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodos,
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...ListTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        ListTodos: listTodosCopy,
        editTodo: {},
      });
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Simple TODO Apps</p>
        <div className="list-todo-container">
          <AddTodo
            addNewTodo={this.addNewTodo}
            ListTodos={this.state.ListTodos}
          />
          <div className="list-todo-content">
            {ListTodos &&
              ListTodos.length > 0 &&
              ListTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                              value={editTodo.title}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>

                    <button
                      className="delete"
                      onClick={() => {
                        this.handleDeleteTodo(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
