import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: null,
      getUserLists: this.getUserLists.bind(this),
    };
  }
  //*****Get List ofUsers*******//
  getUserLists = () => {
    axios
      .get("http://localhost:4000/userlist")
      .then((res) => this.setState({ userList: res.data }))
      .catch((err) => console.log(err));
  };
  /**Component Did Mount**/
  componentDidMount() {
    return this.state.getUserLists();
  }
  /***Delete User***/
  onDeleteUserRequest = (id) => {
    axios
      .patch(`http://localhost:4000/userlist/displayUser/${id}`)
      .then(this.getUserLists())
      .catch((err) => console.log(err));
  };
  /**Render User Lists**/
  renderUsersList = (userInfo, index) => {
    if (userInfo.displayUser) {
      return (
        <tr key={index}>
          <td>{userInfo.firstName + " " + userInfo.lastName}</td>
          <td>{userInfo.userRole}</td>
          <td>{userInfo.email}</td>
          <td>{userInfo.phoneNumber}</td>
          <td className="text-center">
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn-icon-only text-black"
                href="#pablo"
                role="button"
                size="sm"
                color=""
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem
                  className="text-success"
                  onClick={() => {
                    this.props.history.push(
                      "/admin/dashboard/userlist/profile",
                      {
                        userId: userInfo._id,
                      }
                    );
                  }}
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  className="text-danger"
                  onClick={() => this.onDeleteUserRequest(userInfo._id)}
                >
                  Delete
                </DropdownItem>
                <DropdownItem
                  className="text-info"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push(
                      "/admin/dashboard/userlist/edituser",
                      {
                        userId: userInfo._id,
                      }
                    );
                  }}
                >
                  Edit
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="content-wrapper">
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
                      <th style={{ width: 40 }}>Name</th>
                      <th style={{ width: 15 }}>Role</th>
                      <th style={{ width: 25 }}>Email</th>
                      <th style={{ width: 30 }}>Phone Number</th>
                      <th style={{ width: 10 }}>Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {console.log(this.state.userList)} */}
                    {this.state.userList
                      ? this.state.userList.map(this.renderUsersList)
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

export default UserList;
