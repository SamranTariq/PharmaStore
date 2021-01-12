import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo512.png";
class Sidebar extends Component {
  addUserRoleClicked = () => {
    // console.log(this.props);
    this.props.history.push("/admin/dashboard/adduserrole");
  };
  addUserClicked = () => {
    // console.log(this.props);
    this.props.history.push("/admin/dashboard/adduser");
  };
  userListClicked = () => {
    this.props.history.push("/admin/dashboard/userlist");
  };
  render() {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src={logo}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={logo}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fa fa-user" />
                    <p>
                      User Management
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={this.addUserRoleClicked}
                        className="nav-link"
                      >
                        <i className="fa fa-user-plus" />
                        <p>Add Users Role</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={this.addUserClicked}
                        className="nav-link"
                      >
                        <i className="fa fa-user-plus" />
                        <p>Add Users</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={this.userListClicked}
                        className="nav-link"
                      >
                        <i className="fa fa-list" />
                        <p>User List</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </>
    );
  }
}

export default Sidebar;
