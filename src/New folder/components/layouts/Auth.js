import React, { Component } from 'react';
import {Button, Container, Col, Row} from 'reactstrap'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from '../auth/login'
import Register from '../auth/register'
import ForgetPassword from '../auth/forgetPassword'

class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route path = "/auth/login" component = {Login}></Route>
                <Route path = "/auth/register" component = {Register}></Route>
                <Route path = "/auth/forgetpassword" component = {ForgetPassword}></Route>
            </Switch>
        );
    }
}

export default Auth;