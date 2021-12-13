import React, { Component } from "react";
import Dropdown from "./Dropdown";
class RenderListDropDown extends Component {
  state = {
    itemDrop: [
      {
        id: "1",
        item: "react",
      },
      {
        id: "2",
        item: "vue",
      },
      {
        id: "3",
        item: "angular",
      },
    ],
  };
  render() {
    return (
      <>
        <Dropdown itemDrop={this.state.itemDrop} />
      </>
    );
  }
}

export default RenderListDropDown;
