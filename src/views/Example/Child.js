import React, { Component } from "react";
import "./Demo.scss";
class Child extends Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnclickDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    // let name = this.props.name;
    // let age = this.props.age;

    let { post } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    return (
      <>
        {showJobs == false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="address-list">
              {post.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <></>{" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const Child = (props) => {
//   let { name, age, post } = props;
//   return (
//     <>
//       <div className="address-list">
//         {post.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.address} - {item.cost}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default Child;
