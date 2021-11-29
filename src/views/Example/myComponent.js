import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "van",
    tuoi: "23",
  };

  hanldeOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert("click me");
  };
  render() {
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.hanldeOnChangeName(event)}
          />
          <br />
          Hello my component {this.state.name}
        </div>
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            click me!
          </button>
        </div>
      </>
    );
  }
}

export default MyComponent;
