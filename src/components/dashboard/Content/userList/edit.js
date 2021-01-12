import React, { Component } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
import classes from "./edit.css";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: null,
      imageFile: "",
      updatedRecord: false,
      onUpdateRecord: this.onUpdateRecord.bind(this),
    };
  }
  onUpdateRecord = () => {
    axios
      .get(
        `http://localhost:4000/userlistProfile/${this.props.history.location.state.userId}`
      )
      .then((res) => this.setState({ profileInfo: res.data }))
      .catch((err) => console.log(err));
  };
  /****************Alert***************/
  toggle() {
    this.setState({
      updatedRecord: !this.state.updatedRecord,
    });
  }
  onImageChangeHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      imageFile: event.target.files[0],
      loaded: 0,
    });
  };
  onSubmitClick = (e) => {
    e.preventDefault();
    let userInfoForUpdate = {
      newFirstName: document.getElementById("nameInputField").value,
      newLastName: document.getElementById("lastNameInputField").value,
      newPhoneNumber: document.getElementById("phoneNumber").value,
      newEmail: document.getElementById("emailInputField").value,
      newDateOfBirth: document.getElementById("dateOfBirth").value,
      newPostCode: document.getElementById("postcode").value,
      newAddress: document.getElementById("address").value,
      newCity: document.getElementById("city").value,
      newCountry: document.getElementById("country").value,
      newRoleType: document.getElementById("userRole").value,
      newStatus: document.getElementById("userStatus").value,
      newIsAdmin: document.getElementById("checkBoxIsAdmin").checked,
      //   newImage: this.state.imageFile,
    };
    // var formData = new FormData();
    // // formData.append("file", this.state.imageFile);
    // formData.append(
    //   "firstName",
    //   document.getElementById("nameInputField").value
    // );
    // formData.append(
    //   "lastName",
    //   document.getElementById("lastNameInputField").value
    // );
    // formData.append("email", document.getElementById("emailInputField").value);
    // formData.append("password", this.state.password);
    // formData.append(
    //   "phoneNumber",
    //   document.getElementById("phoneNumber").value
    // );
    // formData.append("address", document.getElementById("address").value);
    // formData.append("city", document.getElementById("city").value);
    // formData.append("country", document.getElementById("country").value);
    // formData.append("postCode", document.getElementById("postcode").value);
    // formData.append("userRole", document.getElementById("userRole").value);
    // formData.append("userStatus", document.getElementById("userStatus").value);
    // formData.append(
    //   "checkBoxIsAdmin",
    //   document.getElementById("checkBoxIsAdmin").checked
    // );
    // formData.append(
    //   "dateOfBirth",
    //   document.getElementById("dateOfBirth").value
    // );
    // console.log(userInfoForUpdate);
    axios
      .patch(
        `http://localhost:4000/edituserprofile/${this.props.history.location.state.userId}`,
        userInfoForUpdate
      )
      .then(
        (res) =>
          this.setState({
            updatedRecord: true,
          }),
        this.onUpdateRecord()
      )
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    return this.state.onUpdateRecord();
  }
  render() {
    let firstName,
      lastName,
      email,
      phoneNumber,
      dateofbirth,
      postcode,
      address,
      city,
      country,
      role,
      status,
      img,
      imgReplace,
      isAdmin;
    console.log(this.state.profileInfo);
    if (this.state.profileInfo == null) {
      console.log("null");
    } else {
      firstName = this.state.profileInfo[0].firstName;
      lastName = this.state.profileInfo[0].lastName;
      email = this.state.profileInfo[0].email;
      phoneNumber = this.state.profileInfo[0].phoneNumber;
      dateofbirth = this.state.profileInfo[0].dateOfBirth;
      postcode = this.state.profileInfo[0].address.postCode;
      address = this.state.profileInfo[0].address.completeAddress;
      city = this.state.profileInfo[0].address.city;
      country = this.state.profileInfo[0].address.country;
      role = this.state.profileInfo[1].roleType;
      status = this.state.profileInfo[1].activeStatus;
      img = this.state.profileInfo[0].img;
    }
    if (img == null) {
      console.log(null);
    } else {
      console.log(typeof img);
      imgReplace = img.replace("public", "");
    }
    return (
      <div
        className="col-md-4 content-wrapper"
        style={{ marginLeft: "43%", marginTop: 30 }}
      >
        {/* <Col className="order-xl-1" xl="12"> */}
        <Alert
          color="success"
          isOpen={this.state.updatedRecord}
          toggle={this.toggle.bind(this)}
        >
          Update Successfully
        </Alert>
        {/* </Col> */}
        <div className="card card-primary card-outline">
          <form
            noValidate
            encType="multipart/form-data"
            onSubmit={(e) => this.onSubmitClick(e)}
          >
            <div className="card-body box-profile">
              <div className="text-center">
                <img
                  style={{
                    verticalAlign: "center",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                  src={`http://localhost:4000${imgReplace}`}
                  alt="User Image"
                />
              </div>
              <h3 className="profile-username text-center">{role}</h3>
              <p className="text-muted text-center">{status}</p>

              <div>
                <strong>
                  <i className="fas fa-book mr-1" /> Basic
                </strong>
                <div>
                  <small
                    style={{ float: "left", borderBottom: "solid 2px grey" }}
                    htmlFor="nameInputField"
                  >
                    FirstName
                  </small>
                  <br />
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="nameInputField"
                    defaultValue={firstName}
                  />
                </div>
                <div>
                  <small
                    style={{ float: "left", borderBottom: "solid 2px grey" }}
                    htmlFor="lastNameInputField"
                  >
                    LastName
                  </small>
                  <br />
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="lastNameInputField"
                    defaultValue={lastName}
                  />
                </div>
                <div>
                  <small
                    style={{ float: "left", borderBottom: "solid 2px grey" }}
                    htmlFor="emailInputField"
                  >
                    Email
                  </small>
                  <br />
                  <input
                    type="email"
                    className="form-control input-sm"
                    id="emailInputField"
                    defaultValue={email}
                  />
                </div>
                <div>
                  <small
                    style={{ float: "left", borderBottom: "solid 2px grey" }}
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </small>
                  <br />
                  <input
                    type="phone number"
                    className="form-control input-sm"
                    id="phoneNumber"
                    defaultValue={phoneNumber}
                  />
                </div>
                <div>
                  <small
                    style={{ float: "left", borderBottom: "solid 2px grey" }}
                    htmlFor="dateOfBirth"
                  >
                    Date of birth
                  </small>
                  <br />
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="dateOfBirth"
                    defaultValue={dateofbirth}
                  />
                </div>
                <hr />
                <strong>
                  <i className="fas fa-map-marker-alt mr-1" /> Location
                </strong>
              </div>
              <div>
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="postcode"
                >
                  Posst Code
                </small>
                <br />
                <input
                  type="text"
                  className="form-control input-sm"
                  id="postcode"
                  defaultValue={postcode}
                />
              </div>
              <div>
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="address"
                >
                  Address
                </small>
                <br />
                <input
                  type="text"
                  className="form-control input-sm"
                  id="address"
                  defaultValue={address}
                />
              </div>
              <div>
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="city"
                >
                  City
                </small>
                <br />
                <input
                  type="phone number"
                  className="form-control input-sm"
                  id="city"
                  defaultValue={city}
                />
              </div>
              <div>
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="country"
                >
                  Country
                </small>
                <br />
                <input
                  type="text"
                  className="form-control input-sm"
                  id="country"
                  defaultValue={country}
                />
              </div>
              <hr />
              <strong>
                <i className="fas fa-map-marker-alt mr-1" /> Role
              </strong>
              <div className="form-group sm">
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="country"
                >
                  New Role Type
                </small>
                <br />
                <select
                  className="form-control select2"
                  style={{ width: "100%" }}
                  id="userRole"
                  onChange={this.onChange}
                  defaultValue={this.state.userRole}
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
              <div className="form-group">
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="country"
                >
                  New status
                </small>
                <br />
                <select
                  className="form-control select2"
                  style={{ width: "100%" }}
                  id="userStatus"
                  onChange={this.onChange}
                  defaultValue={this.state.userStatus}
                >
                  <option defaultValue="selected">Publish</option>
                  <option>UnPublish</option>
                </select>
              </div>
              <div className="form-group">
                <small
                  htmlFor="exampleInputFile"
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                >
                  User Image
                </small>
                <br />
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
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-8">
                <button
                  className="btn btn-info"
                  // data-toggle="modal"
                  // data-target="#modal-lg"
                  type="submit"
                  // onClick={this.onSubmitClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          {/* /.card-body */}
        </div>
        <div className="modal fade" id="modal-lg">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Large Modal</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>One fine body…</p>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    );
  }
}

export default Edit;
