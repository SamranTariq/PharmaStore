import React, { Component } from "react";
import axios from 'axios'

class register extends Component {
    onAlreadyAccountClickHandler=()=>{
        this.props.history.push("/auth/login")
    }
  render() {
    return (
      <React.Fragment>
        <div className="hold-transition register-page">
            <div className="register-box">
            <div className="register-logo">
                <a href="../../index2.html">
                <b>Admin</b>LTE
                </a>
            </div>
            <div className="card">
                <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>
                <form onSubmit = {(e) => this.registerClickHandler(e)}>
                    <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        id = "fullnameField"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-user" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id = "emailField"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id = "passwordField"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Retype password"
                        id = "confirmpasswordField"
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="terms"
                            defaultValue="agree"
                        />
                        <label htmlFor="agreeTerms">
                            I agree to the <a style={{cursor:"not-allowed"}}>terms</a>
                        </label>
                        </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">
                        Register
                        </button>
                    </div>
                    {/* /.col */}
                    </div>
                </form>
                <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a style={{cursor:"not-allowed"}} className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" />
                    Sign up using Facebook
                    </a>
                    <a style={{cursor:"not-allowed"}} className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" />
                    Sign up using Google+
                    </a>
                </div>
                <a className="text-center" style = {{cursor : "pointer"}} onClick = {this.onAlreadyAccountClickHandler}>
                    I already have a membership
                </a>
                </div>
                {/* /.form-box */}
            </div>
            {/* /.card */}
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default register;
