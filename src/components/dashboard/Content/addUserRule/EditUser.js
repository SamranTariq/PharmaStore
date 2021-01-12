import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { showUserRoleList } from "../../../../actions/dashboardAction";
class EditUser extends Component {
  componentDidMount() {}
  onAssignRoleClick = (e) => {
    e.preventDefault();
    let RoleInfo = {
      newRole: document.getElementById("InputRole").value,
      newSlug: document.getElementById("InputSlug").value,
    };
    axios
      .patch(
        `http://localhost:4000/assignnewrole/${this.props.userId}`,
        RoleInfo
      )
      .then((res) => this.props.showUserRoleList())
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="card card-secondary col-md-12">
        {/* <div className="card card-secondary col-md-12"> */}
        <div
          style={{
            float: "left",
            backgroundColor: "#007BFF",
            borderColor: "rgb(0, 0, 153)",
            height: "30px",
          }}
          size="sm"
        >
          <Button
            color="info"
            style={{
              float: "left",
            }}
            onClick={(e) => {
              e.preventDefault();
            }}
            size="sm"
          >
            <i className="fas fa-edit" style={{ marginRight: "5px" }} />
            {this.props.userId}
          </Button>
        </div>
        <form onSubmit={this.onAssignRoleClick}>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="InputRole" style={{ float: "left" }}>
                User Role Name
              </label>
              <input
                type="text"
                className="form-control"
                id="InputRole"
                placeholder="User Role Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputSlug" style={{ float: "left" }}>
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                id="InputSlug"
                placeholder="Slug"
                required
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps, { showUserRoleList })(EditUser);
