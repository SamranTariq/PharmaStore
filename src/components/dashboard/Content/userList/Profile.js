import React, { Component } from "react";
import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: null,
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/userlistProfile/${this.props.history.location.state.userId}`
      )
      .then((res) => this.setState({ profileInfo: res.data }))
      .catch((err) => console.log(err));
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
      imgReplace;
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
        <div className="card card-primary card-outline">
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
                  disabled
                  value={firstName}
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
                  disabled
                  value={lastName}
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
                  value={email}
                  disabled
                />
              </div>
              <div>
                <small
                  style={{ float: "left", borderBottom: "solid 2px grey" }}
                  htmlFor="phoneNumber"
                  disabled
                >
                  Phone Number
                </small>
                <br />
                <input
                  type="phone number"
                  className="form-control input-sm"
                  id="phoneNumber"
                  value={phoneNumber}
                  disabled
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
                  value={dateofbirth}
                  disabled
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
                disabled
                value={postcode}
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
                type="email"
                className="form-control input-sm"
                id="address"
                value={address}
                disabled
              />
            </div>
            <div>
              <small
                style={{ float: "left", borderBottom: "solid 2px grey" }}
                htmlFor="city"
                disabled
              >
                City
              </small>
              <br />
              <input
                type="phone number"
                className="form-control input-sm"
                id="city"
                value={city}
                disabled
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
                value={country}
                disabled
              />
            </div>
          </div>
          {/* /.card-body */}
        </div>
      </div>
    );
  }
}

export default Profile;
