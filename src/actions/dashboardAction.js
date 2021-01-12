import axios from "axios";
import {
  SHOW_EDIT_USER_FORM,
  HIDE_EDIT_USER_FORM,
  GET_ERRORS,
  SHOW_USER_ROLE_LIST,
} from "./types";

export const hideEditUserForm = () => {
  return {
    type: HIDE_EDIT_USER_FORM,
  };
};

export const showEditUserForm = (id) => (dispatch) => {
  console.log("dashboard Action");
  return dispatch({
    type: SHOW_EDIT_USER_FORM,
    payload: id,
  });
};

// add New User
export const addNewUser = (userData, history) => (dispatch) => {
  console.log("addUser user [dashboardAction]");
  console.log(userData);
  axios
    .post("http://localhost:4000/adduser/added", userData)
    .then((res) => console.log("Added User Successfully")) // on added user succesfully on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Show User Role List
export const showUserRoleList = (userData, history) => (dispatch) => {
  console.log("showUserRoleList user [dashboardAction]");
  console.log(userData);
  axios
    .get("http://localhost:4000/usersRoleLists")
    .then((res) =>
      dispatch({
        type: SHOW_USER_ROLE_LIST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
