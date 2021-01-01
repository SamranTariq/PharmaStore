import React, { Component } from "react";
import { Button } from "reactstrap";
import AddUserRule from "./AddUserRule";
import { connect } from "react-redux";
import { hideListUsers } from "../../../../actions/dashboardAction";

class UsersList extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-secondary">
                <h3 className="card-title">User List</h3>
                <button
                  type="button"
                  class="btn btn-tool"
                  style={{
                    float: "right",
                    marginTop: "0px",
                    marginBottom: "2px",
                  }}
                  onClick={() => {
                    this.props.hideListUsers();
                  }}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: 10 }}>Id</th>
                      <th style={{ width: 35 }}>Name</th>
                      <th style={{ width: 35 }}>Slug</th>
                      <th style={{ width: 40 }}>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Super Admin</td>
                      <td>Super Admin</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-edit"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          style={{ marginLeft: "8px" }}
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-delete"
                            style={{ marginRight: "5px" }}
                          />
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Admin</td>
                      <td>Admin</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-edit"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          style={{ marginLeft: "8px" }}
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-delete"
                            style={{ marginRight: "5px" }}
                          />
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>User</td>
                      <td>User</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-edit"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          style={{ marginLeft: "8px" }}
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-delete"
                            style={{ marginRight: "5px" }}
                          />
                          Delete
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Staff</td>
                      <td>Staff</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-edit"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          style={{ marginLeft: "8px" }}
                          onClick={((e) => e.preventDefault(), console.log())}
                          size="sm"
                        >
                          <i
                            className="fas fa-delete"
                            style={{ marginRight: "5px" }}
                          />
                          Delete
                        </Button>
                      </td>
                    </tr>
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
export default connect(mapStateToProps, { hideListUsers })(UsersList);
