import React, { Component } from "react";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import Navbar from "../../../components/dashboard/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Dashboard from "../../dashboard/Content/Dashboard";
import AddUserRule from "../../dashboard/Content/addUserRule/AddUserRule";
import UsersList from "../../dashboard/Content/addUserRule/UsersList";
import EditUser from "../../dashboard/Content/addUserRule/EditUser";
import AddUser from "../../dashboard/Content/addUser/addUser";
import UserList from "../../dashboard/Content/userList/UserList";
import UserProfile from "../../dashboard/Content/userList/Profile";
import UserEdit from "../../dashboard/Content/userList/edit";

class Auth extends Component {
  render() {
    // console.log(this.state.userList + "k");
    return (
      <div className="App">
        <Navbar />
        <Sidebar {...this.props} />
        <Switch>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route
            exact
            path="/admin/dashboard/adduserrole"
            component={AddUserRule}
          />
          <Route exact path="/admin/dashboard/adduser" component={AddUser} />
          <Route
            exact
            path="/admin/dashboard/userlist"
            render={() => <UserList {...this.props} />}
          />
          <Route
            exact
            path="/admin/dashboard/userlist/profile"
            component={UserProfile}
          />
          <Route
            exact
            path="/admin/dashboard/userlist/edituser"
            component={UserEdit}
          />
          <Route
            exact
            path="/admin/dashboard/adduser/userlist"
            component={UsersList}
          />
          <Route
            exact
            path="/admin/dashboard/adduser/edituser"
            component={EditUser}
          />
        </Switch>
      </div>
    );
  }
}

export default Auth;
