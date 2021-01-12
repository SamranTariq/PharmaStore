import React, { Component } from "react";
import PropTypes from "prop-types";
import { addNewUser } from "../../../../actions/dashboardAction";
import { connect } from "react-redux";
import classnames from "classnames";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxIsAdmin: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      dateOfBirth: "",
      address: "",
      city: "",
      country: "",
      postCode: "",
      userRole: "Super Admin",
      userStatus: "Publish",
      imageFile: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChangeCheckBox = (e) => {
    let checkBox = document.getElementById("checkBoxIsAdmin").checked;
    if (checkBox) {
      this.setState({
        checkBoxIsAdmin: true,
      });
    } else {
      this.setState({
        checkBoxIsAdmin: false,
      });
    }
  };
  onImageChangeHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      imageFile: event.target.files[0],
      loaded: 0,
    });
  };
  onAddUserFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.props.history);
    var formData = new FormData();
    formData.append("file", this.state.imageFile);
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("phoneNumber", this.state.phoneNumber);
    formData.append("address", this.state.address);
    formData.append("city", this.state.city);
    formData.append("country", this.state.country);
    formData.append("postCode", this.state.postCode);
    formData.append("userRole", this.state.userRole);
    formData.append("userStatus", this.state.userStatus);
    formData.append("checkBoxIsAdmin", this.state.checkBoxIsAdmin);
    formData.append("dateOfBirth", this.state.dateOfBirth);
    this.props.addNewUser(formData, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <div
            className="container-fluid"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <div className="row mb-2">
              <div className="col-sm-0">
                <h5 className="m-0">Add User</h5>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        <div className="card card-default">
          <div className="card-header bg-secondary">
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <form
                    noValidate
                    enctype="multipart/form-data"
                    onSubmit={this.onAddUserFormSubmit}
                  >
                    <div className="form-group sm">
                      <label style={{ float: "left" }}>
                        Select Role Type *
                      </label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="userRole"
                        onChange={this.onChange}
                        value={this.state.userRole}
                      >
                        <option defaultValue="selected">Super Admin</option>
                        <option>Admin</option>
                        <option>Doctor</option>
                        <option>Nurse</option>
                        <option>Staff</option>
                        <option>Store</option>
                        <option>funcionarios</option>
                      </select>
                    </div>
                    <div className="form-group clearfix">
                      <div
                        className="icheck-primary d-inline"
                        style={{ float: "left" }}
                      >
                        <input
                          type="checkbox"
                          id="checkBoxIsAdmin"
                          onChange={this.onChangeCheckBox}
                        />
                        <label htmlFor="checkBoxIsAdmin">isAdmin</label>
                      </div>
                    </div>
                    <label style={{ float: "left" }}>First Name*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="First name"
                      id="firstName"
                      onChange={this.onChange}
                      value={this.state.firstName}
                    />
                    <br />
                    <label style={{ float: "left" }}>Last Name*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Last name"
                      id="lastName"
                      onChange={this.onChange}
                      value={this.state.lastName}
                    />
                    <br />
                    <label style={{ float: "left" }}>Enter Email*</label>
                    <span className="text-red">{errors.email}</span>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      className={classnames("form-control form-control-sm", {
                        invalid: errors.email,
                      })}
                    />
                    <br />
                    <label style={{ float: "left" }}>Enter Password*</label>
                    <span className="text-red">{errors.password}</span>
                    <input
                      type="password"
                      placeholder="password"
                      id="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      className={classnames("form-control form-control-sm", {
                        invalid: errors.password,
                      })}
                    />
                    <br />
                    <label style={{ float: "left" }}>User Phone Number*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Phone Number"
                      id="phoneNumber"
                      onChange={this.onChange}
                      value={this.state.phoneNumber}
                    />
                    <br />
                    <label htmlFor="birthday" style={{ float: "left" }}>
                      User Data of Birth*
                    </label>
                    <input
                      className="form-control form-control-sm"
                      type="date"
                      id="birthday"
                      name="birthday"
                      id="dateOfBirth"
                      onChange={this.onChange}
                      value={this.state.dateOfBirth}
                    />
                    <br />
                    <div className="form-group">
                      <label style={{ float: "left" }}>User Address*</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Address ..."
                        id="address"
                        onChange={this.onChange}
                        value={this.state.address}
                      />
                    </div>

                    <label style={{ float: "left" }}>PostCode*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="code"
                      id="postCode"
                      onChange={this.onChange}
                      value={this.state.postCode}
                    />
                    <br />
                    <label style={{ float: "left" }}>City*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="City"
                      id="city"
                      onChange={this.onChange}
                      value={this.state.city}
                    />
                    <br />
                    <label style={{ float: "left" }}>Country*</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Country"
                      id="country"
                      onChange={this.onChange}
                      value={this.state.country}
                    />
                    <br />
                    <div className="form-group">
                      <label style={{ float: "left" }}>
                        Select Active Status*
                      </label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="userStatus"
                        onChange={this.onChange}
                        value={this.state.userStatus}
                      >
                        <option defaultValue="selected">Publish</option>
                        <option>UnPublish</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputFile"
                        style={{ float: "left" }}
                      >
                        User Image
                      </label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            id="imageFileFieldId"
                            onChange={this.onImageChangeHandler}
                          />
                        </div>
                        {/* <div className="input-group-append">
                          <span className="input-group-text">Upload</span>
                        </div> */}
                      </div>
                    </div>
                    <hr></hr>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.card */}
      </div>
    );
  }
}

AddUser.propTypes = {
  addNewUser: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  errors: state.errors,
});
export default connect(mapStateToProps, { addNewUser })(AddUser);
