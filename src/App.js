import './App.css';
import React, {Component} from 'react' 
import {Switch, Route } from "react-router-dom";
import "./components/fontawesome/library";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import DashboardLayout from './components/layouts/admin/Admin'
import AuthLayout from "./components/layouts/auth/Auth";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRouteForDefault from "./components/private-route/PrivateRouteForDefault"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path='/admin' render = {props => <DashboardLayout {...props}/>}></Route>
          <Route path='/auth' render = {props => <AuthLayout {...props} />}></Route>
          <PrivateRouteForDefault exact path="/" component={Login} />
        </Switch>
          {/* <div className="App">
            <Navbar />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgetpassword" component={ForgetPassword} />
            <Switch>
            <PrivateRouteForDefault exact path="/" component={Landing} />
            <PrivateRouteForDashboard exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div> */}
      </Provider>
    );
  }
}

export default App;
