import React, { Component } from "react";
import { Button } from "reactstrap";
import Header from "../../header/Header";
import UserList from "./UsersList";
import { connect } from "react-redux";
import { showListUsers } from "../../../../actions/dashboardAction";

class AddUserRule extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.dashboard.ShowUserList);
    // localStorage.setItem("userListState", this.props.dashboard.ShowUserList);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.dashboard.ShowUserList);
    localStorage.setItem("userListState", this.props.dashboard.ShowUserList);
  }
  render() {
    let showUserListState = localStorage.getItem("userListState");
    console.log(showUserListState);
    return (
      <div>
        <div className="content-wrapper">
          {/* <Header /> */}
          <div className="content-header">
            <div
              className="container-fluid"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="row mb-2">
                <div className="col-sm-0">
                  <h5 className="m-0">Add User Rule</h5>
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* general form elements */}
          <div className="card card-primary col-md-12">
            <div className="card-header">
              {/* <Button className="card-title sm bg-info">List</Button> */}
              <Button
                style={{
                  float: "left",
                  backgroundColor: "#007BFF",
                  borderColor: "rgb(0, 0, 153)",
                }}
                onClick={() => {
                  console.log("j");
                  this.props.showListUsers();
                }}
                size="sm"
              >
                <i className="fas fa-list" style={{ marginRight: "5px" }} />
                Users List
              </Button>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputRole" style={{ float: "left" }}>
                    User Role Name
                  </label>
                  <Button
                    color="info"
                    style={{
                      float: "right",
                      marginBottom: "8px",
                    }}
                    onClick={((e) => e.preventDefault(), console.log())}
                    size="sm"
                  >
                    <i className="fas fa-edit" style={{ marginRight: "5px" }} />
                    Edit
                  </Button>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="User Role Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputSlug" style={{ float: "left" }}>
                    Slug
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Slug"
                  />
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Assign Role
                </button>
              </div>
            </form>
          </div>
          {showUserListState === "true" ? <UserList /> : console.log("hlo")}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, { showListUsers })(AddUserRule);
