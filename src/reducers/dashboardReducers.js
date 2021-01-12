import {
  SHOW_EDIT_USER_FORM,
  HIDE_EDIT_USER_FORM,
  SHOW_USER_ROLE_LIST,
} from "../actions/types";

const initialState = {
  showEditUserForm: false,
  userId: null,
  userRoleList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_USER_FORM:
      console.log("j");
      return {
        ...state,
        showEditUserForm: true,
        userId: action.payload,
      };
    case HIDE_EDIT_USER_FORM:
      console.log("dashboard Reducer");
      return {
        ...state,
        ShowUserList: false,
      };
    case SHOW_USER_ROLE_LIST:
      // console.log("action.payload");
      console.log(action.payload);
      return {
        ...state,
        userRoleList: action.payload,
      };
    default:
      return state;
  }
}
