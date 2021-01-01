import React, { Component } from 'react';
import Navbar from '../../../components/auth/navbar/Navbar'
import Register from "../../../components/auth/Register";
import Login from "../../../components/auth/Login";
import ForgetPassword from '../../../components/auth/forgetPassword'
import {Route} from 'react-router-dom'

class Auth extends Component {
    render() {
        return (
            <div className="App">
            <Navbar />
            <Route exact path="/auth/register" component={Register} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/forgetpassword" component={ForgetPassword} />
          </div>
        );
    }
}

export default Auth;