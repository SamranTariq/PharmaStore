import React, { Component } from "react";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import Navbar from "../../../components/dashboard/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../dashboard/Content/Dashboard";
import AddUserRule from "../../dashboard/Content/addUserRule/AddUserRule";
import UserList from "../../dashboard/Content/addUserRule/UsersList";

class Auth extends Component {
  render() {
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
          <Route
            exact
            path="/admin/dashboard/adduser/userlist"
            component={UserList}
          />
        </Switch>
      </div>
    );
  }
}
export default Auth;
