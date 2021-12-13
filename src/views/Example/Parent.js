import React, { Component } from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";
class Parent extends Component {
  state = {
    post: [
      {
        id: "1",
        salary: 6000,
        title: "la phu",
      },
      {
        id: "2",
        salary: 5000,
        title: "la phu1",
      },
      {
        id: "3",
        salary: 7000,
        title: "la phu2",
      },
    ],
  };

  AddNewJob = (job) => {
    this.setState({
      post: [...this.state.post, job],
    });
  };

  deleteAJob = (job) => {
    let currentJob = this.state.post;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      post: currentJob,
    });
  };
  render() {
    console.log("call render: ", this.state);
    return (
      <>
        <AddComponent AddNewJob={this.AddNewJob} />

        <Child post={this.state.post} deleteAJob={this.deleteAJob} />
      </>
    );
  }
}

export default Parent;
