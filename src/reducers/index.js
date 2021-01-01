import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import dashboardReducer from "./dashboardReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  dashboard: dashboardReducer,
});
