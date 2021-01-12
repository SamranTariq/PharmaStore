import React, { Component } from "react";
import UserList from "./UsersList";
import { connect } from "react-redux";
import { hideEditUserForm } from "../../../../actions/dashboardAction";
import EditUser from "./EditUser";

class AddUserRule extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log("***************");
    console.log(this.props.dashboard);
    console.log("***************");
  }

  render() {
    return (
      <div>
        <div>
          <div className="content-wrapper">
            <div className="content-header">
              <div
                className="container-fluid"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="row mb-2">
                  <div className="col-sm-0">
                    <h5 className="m-0">Edit Users Rule</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-secondary col-md-12">
              {this.props.dashboard.showEditUserForm ? (
                <EditUser userId={this.props.dashboard.userId} />
              ) : (
                console.log("f")
              )}
            </div>
            <div className="card card-secondary col-md-12">
              <UserList />
            </div>
          </div>
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

export default connect(mapStateToProps, { hideEditUserForm })(AddUserRule);
