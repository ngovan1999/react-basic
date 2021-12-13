import React, { Component } from "react";
import "./Style.scss";
class Dropdown extends Component {
  state = {
    isActive: false,
    isActive2: false,
    listItem: {},
  };
  handleShowAndHide = () => {
    this.setState({
      isActive: !this.state.isActive,
      listItem: {},
    });
  };
  handleClick = (item) => {
    this.setState({
      listItem: item,
    });
    console.log(item);
  };
  handleOnchange = (event) => {
    let editTodoCopy = { ...this.state.listItem };
    editTodoCopy.item = event.target.value;
    this.setState({
      listItem: editTodoCopy,
    });
  };
  render() {
    let { isActive, listItem } = this.state;
    let { itemDrop } = this.props;
    let isEmptyObj = Object.keys(listItem).length === 0;
    return (
      <>
        <div className="dropdown">
          <div
            className="dropdown-btn"
            onClick={() => this.handleShowAndHide()}
          >
            Choose One
          </div>
          {isActive && (
            <div className="dropdown-content">
              {itemDrop.map((item, index) => {
                return (
                  <div
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => this.handleClick(item)}
                  >
                    {item.item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {!isEmptyObj && (
          <input
            type="text"
            onChange={(event) => this.handleOnchange(event)}
            value={listItem.item}
          />
        )}
      </>
    );
  }
}

export default Dropdown;
