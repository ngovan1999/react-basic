import React, { Component } from "react";
import { toast } from "react-toastify";
class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.warn("Error");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    let { ListTodos } = this.props;
    console.log(ListTodos);
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => {
            this.handleAddTodo();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
