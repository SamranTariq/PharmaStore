import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom'
import AdminLayout from './components/layouts/Admin'
import AuthLayout from "./components/layouts/Auth";

function App() {
  return (
    <Switch>
      <Route path='/admin' render = {props => <AdminLayout {...props}/>}></Route>
      <Route path='/auth' render = {props => <AuthLayout {...props} />}></Route>
      <Redirect exact from="/" to="/auth/login" />
    </Switch>
  );
}

export default App;
