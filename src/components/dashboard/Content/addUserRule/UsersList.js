import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import {
  showEditUserForm,
  showUserRoleList,
} from "../../../../actions/dashboardAction";
var id;
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: null,
      getUserLists: this.getUserLists.bind(this),
    };
  }
  /********Get UserLists********/
  getUserLists = () => {
    this.props.showUserRoleList();
    // console.log("jgjdfks");
  };
  componentDidMount() {
    return this.getUserLists();
  }
  renderUsersList = (userInfo, index) => {
    // console.log(userInfo);
    if (userInfo.displayUser) {
      return (
        <tr key={index}>
          <td style={{ textAlign: "left" }}>
            {userInfo.firstName + " " + userInfo.lastName}
          </td>
          <td>{userInfo.userRole}</td>
          <td>{userInfo.userStatus}</td>
          <td>{userInfo.userisAdmin[0] ? "Yes" : "Not"}</td>
          <td>
            <Button
              color="primary"
              onClick={() =>
                this.props.showEditUserForm(userInfo.userRoleId[0])
              }
              size="sm"
            >
              <i className="fas fa-edit" style={{ marginRight: "5px" }} />
              Edit
            </Button>
            <Button
              color="danger"
              style={{ marginLeft: "8px" }}
              onClick={((e) => e.preventDefault(), console.log())}
              size="sm"
            >
              <i className="fas fa-delete" style={{ marginRight: "5px" }} />
              Delete
            </Button>
          </td>
        </tr>
      );
    }
  };
  render() {
    return (
      <div>
        <div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-secondary">
                <h3 className="card-title">User List</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: 10 }}>Id</th>
                      <th style={{ width: 15 }}>Name</th>
                      <th style={{ width: 25 }}>Slug</th>
                      <th style={{ width: 35 }}>isAdmin</th>
                      <th style={{ width: 40 }}>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.dashboard.userRoleList
                      ? this.props.dashboard.userRoleList.map(
                          this.renderUsersList
                        )
                      : console.log("null")}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      «
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      »
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.card */}
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
export default connect(mapStateToProps, { showEditUserForm, showUserRoleList })(
  UsersList
);
