import React, { Component } from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/image/1582695040-73-2-1582685984-width650height813.jpg";
import logo1 from "../../assets/image/gai-Han-Quoc-mac-bikini-2.jpg";
import logo2 from "../../assets/image/nguoi-mau-noi-y-han-quoc.png";
import logo3 from "../../assets/image/untitled-28-1531486507-width650height748.jpg";
import "./Home.scss";
import { connect } from "react-redux";
class Home extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 5000);
  // }
  handleDeleteUser = (user) => {
    console.log(">>> check user delete: ", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log(">>> check props redux ", this.props.dataRedux);
    let listUsers = this.props.dateRedux;
    return (
      <>
        <div>
          <img src={logo} />
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo} />
          <img src={logo1} />
          <img src={logo3} />
          <img src={logo} />
          <img src={logo2} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dateRedux: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
// export default withRouter(Home);
